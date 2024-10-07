import { useStore } from "../../useStore";
import Heading from "../components/Heading";


const StepTwo = () => {
    return (
        <div className="
            flex flex-col items-center justify-center text-text z-[99] 
            lg:w-full
        ">
            <Heading
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />
        </div>
    );
}

export default StepTwo;