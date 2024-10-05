import { useStore } from "../../useStore";

const Step = ({
    number,
    text,
}) => {

    const step = useStore((state) => state.step);
    const changeStep = useStore((state) => state.changeStep);

    const backgroundColor = step === number ? "bg-selected-item" : "bg-transparent";

    return (
        <div className="
            flex items-center justify-center mx-2
            lg:mx-0 lg:mb-6
        ">
            <div className={`
                rounded-full w-10 aspect-square flex items-center justify-center border-2 
                border-text text-white font-bold ${backgroundColor}
                transition-all duration-300 ease-in-out cursor-pointer
                lg:mr-4
            `}
            onClick={() => changeStep(number)}
            >
                {number}
            </div>
            <div className="hidden lg:flex lg:flex-col lg:items-start lg:justify-center uppercase">
                <div className="text-gray-300 font-semibold text-xs">Step {number}</div>
                <div className="text-lg text-white font-semibold">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Step;