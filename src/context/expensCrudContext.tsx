import * as React from "react";

import {
    CreatedData,
    DataProps,
    modifiedArrayData,
    Props,
    LocalStorageVars,
} from "../helpers";

export const Expense = React.createContext<{
    expenseData: DataProps[];
    createExpense: (data: CreatedData) => void;
    editExpense: (data: DataProps) => void;
    deleteExpense: (id: string) => void;
}>({
    expenseData: [],
    createExpense: () => {},
    editExpense: () => {},
    deleteExpense: () => {},
});

export const ExpenseProvider = (props: Props) => {
    const { children } = props;
    const [expenseData, setExpenseData] = React.useState<DataProps[]>([]);

    // Effect => to get expense at the first time open app
    React.useEffect(() => {
        const localStorageExpense = localStorage.getItem(
            LocalStorageVars.Expense
        );
        if (localStorageExpense) {
            setExpenseData(JSON.parse(localStorageExpense));
        }
    }, []);

    const createExpense = (data: CreatedData) => {
        const editedExpenseData = modifiedArrayData(
            { data, action: "CREATE" },
            expenseData,
            LocalStorageVars.Expense
        );
        setExpenseData(editedExpenseData);
    };

    const editExpense = (data: DataProps) => {
        const editedExpenseData = modifiedArrayData(
            { data, action: "EDIT" },
            expenseData,
            LocalStorageVars.Expense
        );
        setExpenseData(editedExpenseData);
    };

    const deleteExpense = (id: string) => {
        const editedExpenseData = modifiedArrayData(
            { data: id, action: "DELETE" },
            expenseData,
            LocalStorageVars.Expense
        );
        setExpenseData(editedExpenseData);
    };

    const data = {
        expenseData,
        createExpense,
        editExpense,
        deleteExpense,
    };
    return <Expense.Provider value={data}>{children}</Expense.Provider>;
};
