import { useStore } from "../../useStore";

const ModelSelect = ({
    name,
    price,
}) => {

    const {
        selectedPlan,
    } = useStore();

    const background = name === selectedPlan ? "bg-text text-black" : "bg-transparent text-text"

    return (
        <div className={`
            w-full border border-border-color border-solid ${background}
            flex items-center justify-between p-4
        `}>
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