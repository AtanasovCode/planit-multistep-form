import { useStore } from "../../useStore";
import InfoInput from "../components/InfoInput";


const StepOne = () => {

    const {
        name, setName,
        mail, setMail,
        number, setNumber,
    } = useStore();

    return (
        <div className="flex flex-col items-center justify-center text-text z-[99]">
            <div className="flex flex-col items-start justify-center mb-6">
                <div className="font-bold text-2xl mb-2 text-left">
                    Personal Info
                </div>
                <div className="text-left text-gray-300 mr-4">
                    Please provide your name, email address, and phone number.
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[100%]">
                <InfoInput
                    label="Name"
                    placeholder="e.g. Stephen King"
                    inputType="text"
                    value={name}
                    setValue={setName}
                />
                <InfoInput
                    label="Email Address"
                    placeholder="e.g. stephenking@lorem.com"
                    inputType="email"
                    value={mail}
                    setValue={setMail}
                />
                <InfoInput
                    label="Phone Number"
                    placeholder="e.g. +1 234 567 890"
                    inputType="text"
                    value={number}
                    setValue={setNumber}
                />
            </div>
        </div>
    );
}

export default StepOne;