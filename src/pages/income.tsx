import * as React from "react";
import { Tabel } from "../components";
import { Income as IncomeCtx } from "../context";
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

export const Income = () => {
    const { incomeData, deleteIncome } = React.useContext(IncomeCtx);

    // Effect to make sure run a message to make you know that you have not any incomes
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (incomeData.length === 0) {
                toast.error("You hanve't any incomes");
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [incomeData]);

    return (
        <Tabel
            header='incomes'
            columns={columns}
            deleteRow={deleteIncome}
            rows={incomeData}
        />
    );
};
