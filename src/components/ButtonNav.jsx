import { useStore } from "../../useStore";

import { checkName, checkNumber, checkMail } from "../Utils";

const ButtonNav = () => {

    const {
        step,
        increaseStep,
        decreaseStep,
        name,
        number,
        mail,
        setNameErr,
        setMailErr,
        setNumberErr,
        isInputValid,
        selectedPlan,
    } = useStore();

    // Used to check if inputs are correct when users click 'Next Step' before button is enabled
    const checkInput = () => {
        setNameErr(!checkName(name));
        setNumberErr(!checkNumber(number));
        setMailErr(!checkMail(mail));
    }

    const checkConditions = () => {
        if(step === 1) {
            return isInputValid ? true : false;
        }
        if(step === 2) {
            return selectedPlan !== "" ? true : false;
        }
        if(step === 3) {
            return true;
        }
        if(step === 4) {
            return true;
        }
    }


    const display = step > 1 ? "inline-block" : "hidden";
    const activeButton = checkConditions() ? "bg-text text-black cursor-pointer" : "bg-gray-600 text-gray-300 cursor-not-allowed";

    return (
        <div className="
            bg-card-background py-3 px-4 flex flex-row-reverse items-center justify-between 
            w-[100%] rounded-tr-xl rounded-tl-xl lg:rounded-none
            sm:w-full lg:bg-transparent lg:px-0
        ">
            <input
                type="button"
                value={step !== 4 ? "Next Step" : "Confirm"}
                className={`${activeButton} py-2 px-4 rounded-md font-medium text-sm transition-all duration-300`}
                onClick={() => isInputValid ? increaseStep() : checkInput()}
            />
            <input
                type="button"
                value="Go Back"
                className={`${display} bg-card-background text-white cursor-pointer font-medium text-sm`}
                onClick={() => decreaseStep()}
            />
        </div>
    );
}

export default ButtonNav;