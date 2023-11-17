import * as React from "react";
import { Stack, SelectChangeEvent } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Input, SelectInput, CreateEditFrame } from "../components";
import { income_categories, expense_categories } from "../data";
import { validateInput } from "../validation";
import { Expense, Income } from "../context";
import { useForm } from "../hooks";

export const CreateEdit = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const params = useParams();
    const { process, id } = params;
    const currentPage = pathname.split("/")[1];

    const { incomeData, createIncome, editIncome } = React.useContext(Income);
    const { expenseData, createExpense, editExpense } =
        React.useContext(Expense);

    const {
        formData,
        formDataError,
        resetFormDataErrors,
        setFormData,
        setFormDataError,
    } = useForm({ currentPage, expenseData, id, incomeData });

    const { amount, category, date, description } = formData;
    const { amountError, categoryError, dateError, descriptionError } =
        formDataError;

    const navigateToPreviousPage = () => {
        navigate(-1);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const limitForAmount = 6;
        resetFormDataErrors();
        if (
            e.target.id === "amount" &&
            e.target.value.length > limitForAmount
        ) {
            return;
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
            }));
        }
    };

    const onChangeSelectHandler = (e: SelectChangeEvent) => {
        resetFormDataErrors();
        setFormData((prevState) => ({
            ...prevState,
            category: e.target.value,
        }));
    };

    const submitFormHandler = () => {
        // validation
        const validateInputs = validateInput([
            { inputValue: category, type: "category" },
            {
                inputValue: amount,
                type: "amount",
            },
            {
                inputValue: date,
                type: "date",
            },
            {
                inputValue: description,
                type: "description",
            },
        ]);

        let ErrorExist: boolean = false;
        validateInputs.forEach((one) => {
            setFormDataError((prevState) => ({
                ...prevState,
                [one.inputValue]: one.message,
            }));
            if (one.message) {
                ErrorExist = true;
            }
        });

        // if there no error so now we can create or edit
        if (ErrorExist) return;

        if (currentPage === "income") {
            // create edit income
            if (process === "create") {
                createIncome({ ...formData, amount: +amount });
            } else {
                editIncome({ id: id!, ...formData, amount: +amount });
            }
        } else {
            // create edit expense
            if (process === "create") {
                createExpense({ ...formData, amount: +amount });
            } else {
                editExpense({ id: id!, ...formData, amount: +amount });
            }
        }

        navigateToPreviousPage();
    };

    return (
        <CreateEditFrame
            currentPage={currentPage}
            navigateToPreviousPage={navigateToPreviousPage}
            process={process}
            submitFormHandler={submitFormHandler}
        >
            <SelectInput
                id='category'
                label='Category'
                value={category}
                error={categoryError}
                onChange={onChangeSelectHandler}
                selectData={
                    currentPage === "income"
                        ? income_categories
                        : expense_categories
                }
            />
            <Stack sx={{ flexDirection: "row", columnGap: 2 }}>
                <Input
                    maxLength={6}
                    id='amount'
                    label='Amout'
                    type='number'
                    value={amount}
                    error={amountError}
                    onChange={onChangeHandler}
                />
                <Input
                    id='date'
                    type='date'
                    label='date'
                    value={date}
                    error={dateError}
                    onChange={onChangeHandler}
                />
            </Stack>
            <Input
                maxLength={100}
                label='Description'
                id='description'
                type='text'
                multiline
                value={description}
                error={descriptionError}
                onChange={onChangeHandler}
            />
        </CreateEditFrame>
    );
};
