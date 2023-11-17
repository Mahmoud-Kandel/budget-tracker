import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "../components";
import { useLocation, useNavigate } from "react-router-dom";

export const CreateBtn = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const moveToCreatePageHandler = () => {
        navigate(`${pathname}/create`);
    };

    return (
        <>
            <Stack
                sx={{ flexDirection: "row", justifyContent: "flex-end", mb: 3 }}
            >
                <CustomButton
                    size='medium'
                    content='add'
                    color='success'
                    icon={<AddIcon />}
                    onClick={moveToCreatePageHandler}
                />
            </Stack>
        </>
    );
};
