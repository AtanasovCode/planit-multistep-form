import { useStore } from "../../useStore";

const ModelSelect = ({
    name,
    price,
    icon,
}) => {

    const {
        selectedPlan,
    } = useStore();

    const background = name === selectedPlan ? "bg-text text-black" : "bg-transparent text-text"

    return (
        <div className={`
            w-full border border-border-color border-solid ${background}
            flex items-center justify-between p-4 cursor-pointer
        `}>
            <div className="mr-4">
                <img 
                    src={icon}
                    alt="pricing icon"
                    className="w-16"
                />
            </div>
            <div className="font-bold text-xl">
                {name}
            </div>
            <div className="text-gray-300">
                {price}$
            </div>
        </div>
    );
}

export default ModelSelect;