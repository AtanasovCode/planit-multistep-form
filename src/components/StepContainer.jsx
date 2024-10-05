import { Outlet } from "react-router";
import StepTracker from "./StepTracker";
import ButtonNav from "./ButtonNav";

const StepContainer = () => {
    return (
        <div className="w-[92vw] min-h-[100dvh] lg:w-[65vw] lg:min-h-auto lg:h-[75vh] lg:bg-card-background flex flex-col-reverse items-center justify-end text-text">
            <div className="bg-card-background w-[100%] rounded-xl translate-y-[-60px] pt-8 pb-4 px-6 z-[90]">
                <Outlet />
            </div>
            <StepTracker />
            <ButtonNav />
        </div>
    );
}

export default StepContainer;