import { useStore } from "../../useStore";

import Heading from "../components/Heading";
import PlanSelect from "../components/PlanSelect";
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
            flex flex-col items-center justify-center text-text z-[99] mb-6 lg:mb-0
            bg-card-background lg:bg-transparent  pt-8 pb-4 px-6 lg:p-0
            sm:w-full
        ">
            <Heading
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />
            <div className="
                grid grid-cols-1 gap-3 justify-items-center w-full mt-4
                lg:grid-cols-3 lg:gap-6
            ">
                {
                    pricingModel?.plans.map((plan) => {
                        return (
                            <PlanSelect
                                key={plan.name}
                                name={plan.name}
                                price={plan.price}
                                icon={plan.icon}
                            />
                        );
                    })
                }
            </div>
            <ModelSelect />
        </div>
    );
}

export default StepTwo;