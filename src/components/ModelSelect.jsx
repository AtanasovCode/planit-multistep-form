import { useStore } from "../../useStore";

const ModelSelect = () => {

    const {
        selectedModel,
        changeSelectedModel,
    } = useStore();

    const position = selectedModel === "monthly" ?
        "translate-x-0"
        :
        " translate-x-[180%]"

    return (
        <div className="
            w-full flex items-center justify-center text-text mt-12 cursor-pointer
        "
        onClick={() => changeSelectedModel()}
        >
            <div>
                Monthly
            </div>
            <div className="w-12 h-6 bg-text flex items-center justify-start px-1 relative mx-2 rounded-xl">
                <div className={`
                        w-[35%] aspect-square rounded-full bg-black
                        transition-all duration-300 ease-in-out
                        ${position}
                `}>
                    {/*Toggle*/}
                </div>
            </div>
            <div>
                Yearly
            </div>
        </div>
    );
}

export default ModelSelect;