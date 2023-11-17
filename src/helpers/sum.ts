import { DataProps } from ".";

export const reduceFun = (data: DataProps[] | number[]): number => {
    return data
        .map((one) => {
            if (typeof one === "number") {
                return one;
            } else {
                return one.amount;
            }
        })
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
