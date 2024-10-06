import { useStore } from "../useStore";

const {
    name,
    number,
    mail,
    setNameErr,
    setNumberErr,
    setMailErr,
    validInput,
    setValidInput,
} = useStore();

// Validate inputs
const isInputValid = () => {
    console.log("Checking");
    let isValid = true;

    // Name validation
    if (name.trim() === "") {
        setNameErr(true);
        isValid = false;
    } else {
        setNameErr(false);
    }

    const mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailPattern.test(mail)) {
        setMailErr(true);
        isValid = false;
    } else {
        setMailErr(false);
    }

    // Number validation (only digits allowed)
    const numberPattern = /^[0-9]+$/;
    if (!numberPattern.test(number)) {
        setNumberErr(true);
        isValid = false;
    } else {
        setNumberErr(false);
    }

    setInputValid(isValid);
}