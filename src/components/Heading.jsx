

const Headong = ({
    title,
    subtitle,
}) => {
    return (
        <div className="
        flex flex-col items-start justify-center mb-6
        lg:w-full
    ">
            <div className="font-bold text-2xl mb-2 text-left lg:text-3xl">
                {title}
            </div>
            <div className="text-left text-gray-300 mr-4">
                {subtitle}
            </div>
        </div>
    );
}

export default Heading;