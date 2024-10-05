import { useStore } from "../../useStore";
import Step from "./Step";

const StepTracker = () => {
    return (
        <div className="text-text flex items-start justify-center pt-8 lg:rounded-xl relative h-[30%] w-[100vw]
        bg-sidebar-mobile lg:bg-sidebar-desktop bg-cover bg-center bg-no-repeat">
            <div className="w-full flex items-center justify-center">
                <Step number={1} text="Your Info" />
                <Step number={2} text="Select Plan" />
                <Step number={3} text="Add-Ons" />
                <Step number={4} text="Summary" />
            </div>
        </div>
    );
}

export default StepTracker;