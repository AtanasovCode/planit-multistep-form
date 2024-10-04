import StepTracker from "./StepTracker";

const StepContainer = () => {
    return (
        <div className="w-[65vw] h-[75vh] bg-card-background flex items-center justify-start p-4 rounded-xl text-text">
        <StepTracker />
        </div>
    );
}

export default StepContainer;