import { useStore } from "../../useStore";

const ButtonNav = () => {

    const {
        step,
        increaseStep,
        decreaseStep,
    } = useStore();

    const display = step > 1 ? "inline-block" : "hidden"

    return (
        <div className="
            bg-card-background py-3 px-4 flex flex-row-reverse items-center justify-between 
            fixed bottom-0 left-0 w-[100%]
        ">
            <input
                type="button"
                value="Next Step"
                className="bg-white text-black py-2 px-4 rounded-md cursor-pointer font-medium text-sm"
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