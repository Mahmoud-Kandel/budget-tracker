import * as React from "react";
import { Tabel } from "../components";
import { Expense } from "../context";
import { toast } from "react-toastify";

import { Column } from "../components";

const columns: Column[] = [
    { id: "no", label: "No", minWidth: 170 },
    { id: "category", label: "Category", minWidth: 170 },
    { id: "amount", label: "Amount", minWidth: 170 },
    { id: "date", label: "Date", minWidth: 170 },
    { id: "description", label: "Description", minWidth: 170 },
    { id: "actions", label: "Actions", minWidth: 170 },
];

export const Expenses = () => {
    const { expenseData, deleteExpense } = React.useContext(Expense);

    // Effect to make sure run a message to make you know that you have not any expenses
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (expenseData.length === 0) {
                toast.error("You hanve't any expenses");
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [expenseData]);

    return (
        <Tabel
            header='expenses'
            columns={columns}
            deleteRow={deleteExpense}
            rows={expenseData}
        />
    );
};
