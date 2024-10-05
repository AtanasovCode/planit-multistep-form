import { useStore } from "../../useStore";

const InfoInput = ({
    label,
    placeholder,
    inputType,
    value,
    setValue,
}) => {
    return (
        <div className="flex flex-col items-start justify-center w-[100%] text-white mb-6">
            <div className="mb-1 text-sm text-gray-300">
                {label}
            </div>
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                className="w-[100%] p-3 text-left border border-border-color border-solid outline-none rounded-sm bg-transparent"
            />
        </div>
    );
}

export default InfoInput;