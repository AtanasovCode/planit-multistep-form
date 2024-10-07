import { useEffect } from "react";
import { useStore } from "../../useStore";

const ModelSelect = ({
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
            flex items-center justify-start p-4 cursor-pointer rounded-lg
            transition-all duration-300 ease-in-out
        `}
        onClick={() => changeSelectedPlan(name)}
        >
            <div className="mr-4">
                <img
                    src={icon}
                    alt="pricing icon"
                    className="w-10"
                />
            </div>
            <div className="flex flex-col items-start justify-center">
                <div className="font-bold text-xl text-left capitalize mb-2">
                    {name}
                </div>
                <div className={`${textColor} text-left text-sm`}>
                    ${price}/mo
                </div>
            </div>
        </div>
    );
}

export default ModelSelect;