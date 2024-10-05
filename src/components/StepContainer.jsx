import { Outlet } from "react-router";
import StepTracker from "./StepTracker";
import ButtonNav from "./ButtonNav";

const StepContainer = () => {
    return (
        <div className="
            w-[92vw] min-h-[100dvh] lg:bg-card-background 
            flex flex-col-reverse items-center justify-center text-text
            lg:flex-row-reverse lg:px-4 lg:py-4 lg:w-[75vw] lg:min-h-full lg:h-[75vh]
            xl:w-[65vw] xl:h-[73vh] xl:max-w-[58rem]
        ">
            <div className="
                bg-card-background w-[100%] rounded-xl mt-[-60px] pt-8 pb-4 px-6 z-[90]
                xs:w-[90%] sm:w-[85%] md:w-[60%]
                lg:bg-transparent lg:mt-0 lg:p-0 lg:flex lg:flex-col lg:items-center lg:justify-between
                lg:w-full lg:h-full lg:pt-10
                xl:px-16
            ">
                <Outlet />
                <ButtonNav />
            </div>
            <StepTracker />
        </div>
    );
}

export default StepContainer;