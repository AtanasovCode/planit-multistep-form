import { useStore } from "../../useStore";

const AddOn = ({
    title,
    subtitle,
    price,
}) => {

    const {
        selectedModel,
    } = useStore();

    return (
        <div className={`
            w-full border border-solid border-border-color p-4
            flex items-center justify-start
        `}>
            <div>
                {/* Checkmark */}
            </div>
            <div className="
                flex flex-col items-start justify-center
            ">
                <div className="font-semibold text-lg">
                    {title}
                </div>
                <div className="font-xs text-gray-300">
                    {subtitle}
                </div>
            </div>
            <div className="text-text">
                {price}{selectedModel === "yearly" ? "/yr" : "/mo"}
            </div>
        </div>
    );
}

export default AddOn;