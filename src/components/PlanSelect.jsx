import { useEffect } from "react";
import { useStore } from "../../useStore";

const PlanSelect = ({
    name,
    price,
    icon,
}) => {

    const {
        selectedPlan,
        changeSelectedPlan,
    } = useStore();

    const background = name === selectedPlan ? "bg-selected-item text-black border-none" : "bg-transparent text-text"
    const textColor = name === selectedPlan ? "text-black" : "text-gray-300"

    return (
        <div className={`
            w-full border border-border-color border-solid ${background}
            flex items-center justify-start p-3 cursor-pointer rounded-lg
            transition-all duration-300 ease-in-out
            lg:flex-col lg:items-start lg:justify-center lg:py-6 lg:px-4
        `}
        onClick={() => changeSelectedPlan(name)}
        >
            <div className="mr-4 lg:mr-0 lg:mb-4">
                <img
                    src={icon}
                    alt="pricing icon"
                    className="w-10 lg:w-14"
                />
            </div>
            <div className="flex flex-col items-start justify-center">
                <div className="font-semibold text-lg text-left capitalize lg:text-xl lg:font-bold lg:mb-2">
                    {name}
                </div>
                <div className={`${textColor} text-left text-xs lg:text-[1rem]`}>
                    ${price}/mo
                </div>
            </div>
        </div>
    );
}

export default PlanSelect;