import * as React from "react";

import { Income, Expense } from "../context";
import { toast } from "react-toastify";
import { reduceFun } from "../helpers";
import { colors } from "../constants";
import { MainHeader, PieChart, Graph } from "../components";
import { Box, Stack } from "@mui/material";

export const Summary = () => {
    const [total, setTotal] = React.useState({
        totalIncome: 0,
        totalExpense: 0,
        incomeInPercentage: 0,
        expenseInPercentage: 0,
    });

    const { incomeData } = React.useContext(Income);
    const { expenseData } = React.useContext(Expense);

    // Effect to make sure run a message to make you know that you have not any incomes
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (incomeData.length === 0 && expenseData.length === 0) {
                toast.error("You hanve't any incomes or expenses");
            } else {
                const incomeInpercentage = reduceFun(incomeData);
                const expenseInpercentage = reduceFun(expenseData);
                const percentage =
                    100 / (incomeInpercentage + expenseInpercentage);
                setTotal({
                    totalExpense: +expenseInpercentage.toFixed(2),
                    totalIncome: +incomeInpercentage.toFixed(2),
                    expenseInPercentage: +(
                        expenseInpercentage * percentage
                    ).toFixed(2),
                    incomeInPercentage: +(
                        incomeInpercentage * percentage
                    ).toFixed(2),
                });
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [expenseData, incomeData]);

    return (
        <Stack sx={{ mt: 5, flexDirection: "column" }}>
            <MainHeader content='summary' />
            <Box mt='20px' display='flex' flexWrap='wrap' gap={4}>
                <PieChart
                    title='Total income'
                    labels={["Total income", "Total Expense"]}
                    value={total.totalIncome}
                    series={[
                        total.incomeInPercentage,
                        total.expenseInPercentage,
                    ]}
                    colors={[colors.darkGreen, colors.lightGray]}
                />
                <PieChart
                    title='Total Expense'
                    labels={["Total Expense", "Total Income"]}
                    value={total.totalExpense}
                    series={[
                        total.expenseInPercentage,
                        total.incomeInPercentage,
                    ]}
                    colors={[colors.lightRed, colors.lightGray]}
                />
            </Box>
            <Stack
                mt='25px'
                width='100%'
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <Graph
                    series={[
                        {
                            name: "Expense",
                            data: incomeData.map((one) => one.amount) || 0,
                        },
                        {
                            name: "Income",
                            data: expenseData.map((one) => one.amount) || 0,
                        },
                    ]}
                />
            </Stack>
        </Stack>
    );
};
