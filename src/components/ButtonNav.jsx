import { useState, useEffect } from "react";
import { useStore } from "../../useStore";

const ButtonNav = () => {

    const {
        step,
        increaseStep,
        decreaseStep,
        name,
        mail,
        number,
        inputValid,
    } = useStore();


    const display = step > 1 ? "inline-block" : "hidden";
    const activeButton = inputValid ? "bg-text text-black cursor-pointer" : "bg-gray-600 text-gray-300 cursor-not-allowed";

    return (
        <div className="
            bg-card-background py-3 px-4 flex flex-row-reverse items-center justify-between 
            absolute bottom-0 left-0 w-[100%]
            lg:bg-transparent lg:static lg:bottom-auto lg:left-auto
        ">
            <input
                type="button"
                value="Next Step"
                className={`${activeButton} py-2 px-4 rounded-md font-medium text-sm transition-all duration-300`}
                onClick={() => increaseStep()}
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