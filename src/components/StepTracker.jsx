import { useStore } from "../../useStore";
import Step from "./Step";

const StepTracker = () => {
    return (
        <div className="
            text-text flex items-start justify-center pt-8 relative h-[25dvh] w-[100vw]
            bg-sidebar-mobile bg-cover bg-center bg-no-repeat
            lg:bg-sidebar-desktop lg:w-[33%] lg:h-[100%] lg:rounded-xl lg:px-5
        ">
            <div className="
                w-full flex items-center justify-center
                lg:flex-col lg:justify-start lg:items-start
            ">
                <Step number={1} text="Your Info" />
                <Step number={2} text="Select Plan" />
                <Step number={3} text="Add-Ons" />
                <Step number={4} text="Summary" />
            </div>
        </div>
    );
}

export default StepTracker;