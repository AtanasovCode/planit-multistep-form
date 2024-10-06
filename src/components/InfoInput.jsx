const InfoInput = ({
    label,
    placeholder,
    inputType,
    value,
    setValue,
    error,
    errorMessage,
}) => {


    return (
        <div className="flex flex-col items-start justify-center w-[100%] text-white mb-3">
            <div className="mb-1 text-xs text-gray-300">
                {label}
            </div>
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                className="w-[100%] p-3 text-left border border-border-color border-solid outline-none rounded-sm bg-transparent"
            />
            {
                error &&
                <div className="mt-1 text-right w-full text-gray-300 text-xs">
                    {errorMessage}
                </div>
            }
        </div>
    );
}

export default InfoInput;