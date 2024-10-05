import { Outlet } from "react-router";
import StepTracker from "./StepTracker";

const StepContainer = () => {
    return (
        <div className="w-[95vw] min-h-[100dvh] lg:w-[65vw] lg:min-h-auto lg:h-[75vh] bg-card-background flex flex-col-reverse items-center justify-end text-text">
            <Outlet />
            <StepTracker />
        </div>
    );
}

export default StepContainer;