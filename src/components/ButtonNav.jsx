import { useStore } from "../../useStore";

const ButtonNav = () => {
    return (
        <div className="bg-card-background py-3 px-4 flex flex-row-reverse items-center justify-between absolute bottom-0 left-0 w-[100%]">
            <input
                type="button"
                value="Next Step"
                className="bg-white text-black py-2 px-4 rounded-md cursor-pointer font-medium text-sm"
            />
            <input
                type="button"
                value="Go Back"
                className="bg-card-background text-white cursor-pointer hidden font-medium text-sm"
            />
        </div>
    );
}

export default ButtonNav;