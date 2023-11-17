import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

interface CustomButtonProps {
    content?: string;
    icon?: React.ReactNode;
    onClick: () => void;
    size: "small" | "medium" | "large";
    color:
        | "error"
        | "info"
        | "inherit"
        | "primary"
        | "secondary"
        | "success"
        | "warning";
}

export const CustomButton = (props: CustomButtonProps) => {
    const { content, icon, color, size, onClick } = props;
    return (
        <Box>
            <Button
                color={color}
                startIcon={icon}
                variant='contained'
                size={size}
                onClick={onClick}
            >
                {content}
            </Button>
        </Box>
    );
};
