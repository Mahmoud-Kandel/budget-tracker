import { Typography } from "@mui/material";
import { colors } from "../../constants";

interface AmountProps {
    amount: number;
    color: "red" | "green";
}

export const Amount = (props: AmountProps) => {
    const { amount, color } = props;
    return (
        <Typography
            sx={{
                color: color === "red" ? colors.lightRed : colors.darkGreen,
            }}
        >
            &#36; {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Typography>
    );
};
