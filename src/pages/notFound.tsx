import { Stack, Typography } from "@mui/material";
import { colors } from "../constants";
import { CustomButton } from "../components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Stack
            sx={{
                mt: 15,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography
                mb={3}
                sx={{
                    textTransform: "capitalize",
                    color: colors.darkRed,
                }}
                variant='body1'
                fontWeight='bold'
            >
                404 | page not found
            </Typography>
            <CustomButton
                size='medium'
                content='back'
                color='info'
                icon={<ArrowBackIosNewIcon />}
                onClick={() => navigate(-1)}
            />
        </Stack>
    );
};
