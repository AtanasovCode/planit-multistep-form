
// Name validation
// If correct returns true, if incorrect returns false
export const checkName = (name) => {
    if (name.trim() === "") {
        return false;
    } else {
        return true;
    }
}

// Mail validation
// If correct returns true, if incorrect returns false
export const checkMail = (mail) => {
    const mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailPattern.test(mail)) {
        return false;
    } else {
        return true;
    }
}

// Number validation (only digits allowed)
// If correct returns true, if incorrect returns false
export const checkNumber = (number) => {
    const numberPattern = /^[0-9]+$/;
    if (!numberPattern.test(number)) {
        return false;
    } else {
        return true;
    }
}