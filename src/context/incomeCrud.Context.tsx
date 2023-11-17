import * as React from "react";

import {
    CreatedData,
    DataProps,
    modifiedArrayData,
    Props,
    LocalStorageVars,
} from "../helpers";

export const Income = React.createContext<{
    incomeData: DataProps[];
    createIncome: (data: CreatedData) => void;
    editIncome: (data: DataProps) => void;
    deleteIncome: (id: string) => void;
}>({
    incomeData: [],
    createIncome: () => {},
    editIncome: () => {},
    deleteIncome: () => {},
});

export const IncomeProvider = (props: Props) => {
    const { children } = props;
    const [incomeData, setIncomeData] = React.useState<DataProps[]>([]);

    // Effect => to get income at the first time open app
    React.useEffect(() => {
        const localStorageIncome = localStorage.getItem(
            LocalStorageVars.Income
        );
        if (localStorageIncome) {
            setIncomeData(JSON.parse(localStorageIncome));
        }
    }, []);

    const createIncome = (data: CreatedData) => {
        const editedIncomeData = modifiedArrayData(
            { data, action: "CREATE" },
            incomeData,
            LocalStorageVars.Income
        );
        setIncomeData(editedIncomeData);
    };

    const editIncome = (data: DataProps) => {
        const editedIncomeData = modifiedArrayData(
            { data, action: "EDIT" },
            incomeData,
            LocalStorageVars.Income
        );
        setIncomeData(editedIncomeData);
    };

    const deleteIncome = (id: string) => {
        const editedIncomeData = modifiedArrayData(
            { data: id, action: "DELETE" },
            incomeData,
            LocalStorageVars.Income
        );
        setIncomeData(editedIncomeData);
    };

    const data = {
        incomeData,
        createIncome,
        editIncome,
        deleteIncome,
    };
    return <Income.Provider value={data}>{children}</Income.Provider>;
};
