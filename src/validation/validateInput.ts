interface ValidateInputProps {
    inputValue: string;
    type: "amount" | "date" | "category" | "description";
}

interface ValidateOutputProps {
    inputValue: string;
    message: string;
}

export const validateInput = (
    array: ValidateInputProps[]
): ValidateOutputProps[] => {
    return array.map((one) => {
        const { inputValue, type } = one;
        switch (type) {
            case "amount":
            case "date":
            case "category":
            case "description":
                if (!inputValue || inputValue.trim().length === 0) {
                    return {
                        inputValue: `${type}Error`,
                        message: `Please fill ${type} field.`,
                    };
                }
                return {
                    inputValue: `${type}Error`,
                    message: "",
                };
        }
    });
};
