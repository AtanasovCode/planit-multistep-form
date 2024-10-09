import { useStore } from "../../useStore";

const Step = ({
    number,
    text,
}) => {

    const {
        step,
        changeStep,
        isInputValid,
        selectedPlan,
    } = useStore();

    const checkConditions = () => {
        if (step === 1) {
            return isInputValid ? true : false;
        }
        if (step === 2) {
            return selectedPlan !== "" ? true : false;
        }
        if (step === 3) {
            return true;
        }
        if (step === 4) {
            return true;
        }
    }

    const backgroundColor = step === number ? "bg-selected-item" : "bg-transparent";
    const color = step === number ? "text-black" : "text-text";

    return (
        <div className="
            flex items-center justify-center mx-2
            lg:mx-0 lg:mb-8
        ">
            <div className={`
                rounded-full w-10 lg:w-8 aspect-square text-sm lg:text-xs flex items-center justify-center border-2 
                border-text font-bold ${backgroundColor} ${color}
                transition-all duration-300 ease-in-out cursor-pointer
                lg:mr-4
            `}
                onClick={() => checkConditions() && changeStep(number)}
            >
                {number}
            </div>
            <div className="hidden lg:flex lg:flex-col lg:items-start lg:justify-center uppercase">
                <div className="text-gray-300 font-semibold text-xs">
                    Step {number}
                </div>
                <div className="text-md text-white font-semibold">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Step;