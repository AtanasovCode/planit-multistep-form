import { useStore } from "../../useStore";

const AddOn = ({
    title,
    subtitle,
    price,
    checked,
    id,
}) => {

    const {
        selectedModel,
        checkAddon,
    } = useStore();

    const checkActiveStyle = checked ? 
        `before:absolute before:content-['✔️'] before:w-full before:h-full before:flex 
         before:items-center before:justify-center before:bg-text before:text-black 
         before:text-xs before:transition-all before:duration-300 before:ease-in-out`
        :
        "before:hidden"

    return (
        <div className={`
            w-full border border-solid border-border-color p-4
            flex items-center justify-between
        `}>
            <div className="flex items-center justify-start">
                <div className={`
                    w-5 aspect-square border border-border-color bg-transparent mr-4 relative
                    transition-all duration-300 ease-in-out cursor-pointer
                    ${checkActiveStyle}
                    lg:w-4
                `}
                onClick={() => checkAddon(id)}
            >
                    {/* Checkmark */}
                </div>
                <div className="
                    flex flex-col items-start justify-center
                ">
                    <div className="text-md lg:text-lg lg:font-semibold">
                        {title}
                    </div>
                    <div className="text-xs text-gray-300 lg:text-sm">
                        {subtitle}
                    </div>
                </div>
            </div>
            <div className="text-text text-xs lg:text-sm">
                + {price}${selectedModel === "yearly" ? "/yr" : "/mo"}
            </div>
        </div>
    );
}

export default AddOn;