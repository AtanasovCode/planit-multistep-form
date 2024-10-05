import { useStore } from "../../useStore";

const StepOne = () => {
    return (
        <div className="bg-card-background w-[100%] rounded-xl translate-y-[-60%] pt-10 px-6 flex flex-col items-center justify-center text-text z-[99]">
            <div className="flex flex-col items-start justify-center">
                <div className="font-bold text-2xl mb-2 text-left">
                    Personal Info
                </div>
                <div className="text-left text-gray-300">
                    Please provide your name, email address, and phone number.
                </div>
            </div>
        </div>
    );
}

export default StepOne;