import { useStore } from "../../useStore";

const Step = ({
    number,
    text,
}) => {

    const step = useStore((state) => state.step);
    const changeStep = useStore((state) => state.changeStep);

    const backgroundColor = step === number ? "bg-selected-item" : "bg-transparent";

    return (
        <div className="flex items-center justify-center mx-2">
            <div className={`
                rounded-full w-10 aspect-square flex items-center justify-center border-2 
                border-text text-white font-bold ${backgroundColor}
                transition-all duration-300 ease-in-out cursor-pointer
            `}
            onClick={() => changeStep(number)}
            >
                {number}
            </div>
        </div>
    );
}

export default Step;