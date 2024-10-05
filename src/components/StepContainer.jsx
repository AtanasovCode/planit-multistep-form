import StepTracker from "./StepTracker";

const StepContainer = () => {
    return (
        <div className="w-[90vw] h-[90dvh] lg:w-[65vw] lg:h-[75vh] bg-card-background flex flex-col items-center justify-start p-4 lg:rounded-xl text-text">
            <StepTracker />
        </div>
    );
}

export default StepContainer;