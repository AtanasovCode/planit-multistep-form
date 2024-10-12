import { Outlet } from "react-router";
import StepTracker from "./StepTracker";
import ButtonNav from "./ButtonNav";

const StepContainer = () => {
    return (
        <div className="
            w-[92vw] min-h-[100dvh] lg:bg-card-background
            flex flex-col items-center justify-start text-text
            lg:flex-row lg:px-4 lg:py-4 lg:w-[75vw] lg:min-h-full lg:h-[75vh] lg:justify-center
            xl:w-[65vw] xl:h-[73vh] xl:max-w-[58rem]
        ">
            <StepTracker />
            <div className="
                flex-1 rounded-xl mt-[-60px] z-[90]
                flex flex-col items-center justify-between
                xs:w-[90%] sm:w-[85%] md:w-[65%]
                lg:bg-transparent lg:mt-0 lg:p-0 lg:flex lg:flex-col lg:items-center lg:justify-between
                lg:w-full lg:h-full lg:pt-10 lg:px-12
                xl:px-20
            ">
                <Outlet />
                <ButtonNav />
            </div>
        </div>
    );
}

export default StepContainer;