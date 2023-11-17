import { Typography } from "@mui/material";

interface MainHeaderProps {
    content: string;
}

export const MainHeader = (props: MainHeaderProps) => {
    return (
        <Typography
            sx={{ textTransform: "capitalize", fontSize: 24, mb: 3 }}
            variant='body1'
            fontWeight='bold'
        >
            {props.content}
        </Typography>
    );
};
