import React from "react";
import { DataProps } from "../helpers";

interface UseFormProps {
    currentPage: string;
    id: string | undefined;
    incomeData: DataProps[];
    expenseData: DataProps[];
}

export const useForm = (props: UseFormProps) => {
    const { expenseData, id, incomeData, currentPage } = props;

    const [formData, setFormData] = React.useState({
        amount: "",
        category: "",
        date: "",
        description: "",
    });

    const [formDataError, setFormDataError] = React.useState({
        amountError: "",
        categoryError: "",
        dateError: "",
        descriptionError: "",
    });
    const { amountError, categoryError, dateError, descriptionError } =
        formDataError;

    // Effect to render income or expence in edit process
    React.useEffect(() => {
        if (id) {
            if (currentPage === "income") {
                const currentIncome = incomeData.find((one) => one.id === id);
                if (!currentIncome) return;
                setFormData({
                    amount: `${currentIncome?.amount}`,
                    category: currentIncome?.category,
                    date: currentIncome.date,
                    description: currentIncome.description,
                });
            } else {
                const currentExpence = expenseData.find((one) => one.id === id);
                if (!currentExpence) return;
                setFormData({
                    amount: `${currentExpence?.amount}`,
                    category: currentExpence?.category,
                    date: currentExpence.date,
                    description: currentExpence.description,
                });
            }
        }
    }, [currentPage, expenseData, id, incomeData]);

    const resetFormDataErrors = React.useCallback(() => {
        // remove error messages
        if (amountError || categoryError || dateError || descriptionError) {
            setFormDataError({
                amountError: "",
                categoryError: "",
                dateError: "",
                descriptionError: "",
            });
        }
    }, [amountError, categoryError, dateError, descriptionError]);

    return {
        formData,
        setFormData,
        formDataError,
        setFormDataError,
        resetFormDataErrors,
    };
};
