import { useEffect } from "react";
import { useStore } from "../../useStore";
import InfoInput from "../components/InfoInput";
import { checkName, checkNumber, checkMail } from "../Utils";
import Heading from "../components/Heading";


const StepOne = () => {

    const {
        name, setName,
        mail, setMail,
        number, setNumber,
        nameErr,
        numberErr,
        mailErr,
        setIsInputValid,
    } = useStore();

    // Validate inputs
    //checks inputs when user types in input fields
    useEffect(() => {
        setIsInputValid(checkName(name) && checkNumber(number) && checkMail(mail));
    }, [name, number, mail])

    return (
        <div className="
            flex flex-col items-center justify-center text-text z-[99] 
            lg:w-full
        ">
            <Heading 
                title="Personal Info"
                subtitle="Please provide your name, email address, and phone number."
            />
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