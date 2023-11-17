import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export enum LocalStorageVars {
    Income = "income",
    Expense = "expense",
}

export interface CreatedData {
    amount: number;
    category: string;
    date: string;
    description: string;
}

export interface DataProps extends CreatedData {
    id: string;
}

export type Props = {
    children: React.ReactNode;
};

export const modifiedArrayData = (
    payload:
        | { data: string; action: "DELETE" }
        | { data: DataProps; action: "EDIT" }
        | { data: CreatedData; action: "CREATE" },
    array: DataProps[],
    localStorageKey: LocalStorageVars
): DataProps[] => {
    let id: string;
    const unFreezedData = [...array];
    const { action, data } = payload;

    if (action === "DELETE") {
        id = data;
        const index = unFreezedData.findIndex((income) => income.id === id);
        if (index === -1) return unFreezedData;
        unFreezedData.splice(index, 1);
        toast.success(
            `You delete  ${localStorageKey} with id ${id} successfully`
        );
    } else if (action === "CREATE") {
        const id = uuidv4();
        unFreezedData.push({ ...data, id });
        toast.success(`You added new ${localStorageKey} successfully`);
    } else if (action === "EDIT") {
        const editedData = data;
        const index = unFreezedData.findIndex(
            (income) => income.id === editedData.id
        );
        if (index === -1) return unFreezedData;
        unFreezedData[index] = { ...editedData };
        toast.success(
            `You edit ${localStorageKey} with id ${data.id} successfully`
        );
    }

    localStorage.setItem(localStorageKey, JSON.stringify(unFreezedData));
    return unFreezedData;
};
