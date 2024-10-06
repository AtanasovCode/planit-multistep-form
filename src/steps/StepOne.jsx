import { useEffect } from "react";
import { useStore } from "../../useStore";
import InfoInput from "../components/InfoInput";
import { checkName, checkNumber, checkMail } from "../Utils";


const StepOne = () => {

    const {
        name, setName,
        mail, setMail,
        number, setNumber,
        nameErr,
        numberErr,
        mailErr,
        setValidInput,
    } = useStore();

    // Validate inputs
    //checks inputs when user types in input fields
    useEffect(() => {
        setValidInput(checkName(name) && checkNumber(number) && checkMail(mail));
    }, [name, number, mail])

    return (
        <div className="
            flex flex-col items-center justify-center text-text z-[99] 
            lg:w-full
        ">
            <div className="
                flex flex-col items-start justify-center mb-6
                lg:w-full
            ">
                <div className="font-bold text-2xl mb-2 text-left lg:text-3xl">
                    Personal Info
                </div>
                <div className="text-left text-gray-300 mr-4">
                    Please provide your name, email address, and phone number.
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <InfoInput
                    label="Name"
                    placeholder="e.g. Stephen King"
                    inputType="text"
                    value={name}
                    setValue={setName}
                    error={nameErr}
                    errorMessage="Please enter your name"
                />
                <InfoInput
                    label="Email Address"
                    placeholder="e.g. stephenking@lorem.com"
                    inputType="email"
                    value={mail}
                    setValue={setMail}
                    error={mailErr}
                    errorMessage="Please input valid e-mail address"
                />
                <InfoInput
                    label="Phone Number"
                    placeholder="e.g. +1 234 567 890"
                    inputType="text"
                    value={number}
                    setValue={setNumber}
                    error={numberErr}
                    errorMessage="Input valid phone number"
                />
            </div>
        </div>
    );
}

export default StepOne;