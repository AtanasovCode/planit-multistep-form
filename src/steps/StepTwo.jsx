import { useStore } from "../../useStore";

import Heading from "../components/Heading";
import ModelSelect from "../components/ModelSelect";


const StepTwo = () => {

    const {
        pricing,
        selectedModel,
    } = useStore();

    //getting the selected pricing model object
    const pricingModel = pricing.find((item) => item.type === selectedModel);

    return (
        <div className="
            flex flex-col items-center justify-center text-text z-[99] 
            lg:w-full
        ">
            <Heading
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />
            <div className="
                grid grid-cols-1 gap-3 justify-items-center w-full mt-4
            ">
                {
                    pricingModel?.plans.map((plan) => {
                        return (
                            <ModelSelect
                                key={plan.name}
                                name={plan.name}
                                price={plan.price}
                                icon={plan.icon}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default StepTwo;