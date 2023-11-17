import * as React from "react";
import { Stack } from "@mui/material";
import { CustomButton, MainHeader } from "../components";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

interface CreateEditFrameProps {
    process: string | undefined;
    currentPage: string;
    navigateToPreviousPage: () => void;
    submitFormHandler: () => void;
    children: React.ReactNode;
}

export const CreateEditFrame = (props: CreateEditFrameProps) => {
    const {
        children,
        currentPage,
        process,
        navigateToPreviousPage,
        submitFormHandler,
    } = props;

    return (
        <Stack sx={{ mt: 5 }}>
            <MainHeader content={`${process} ${currentPage}`} />
            <Stack>
                {/* inputs */}
                {children}
            </Stack>
            <Stack
                sx={{
                    flexDirection: "row",
                    my: 5,
                    columnGap: 2,
                    justifyContent: "end",
                }}
            >
                <CustomButton
                    size='medium'
                    content='cancel'
                    color='error'
                    icon={<CloseIcon />}
                    onClick={navigateToPreviousPage}
                />
                <CustomButton
                    size='medium'
                    content={process === "create" ? "add" : "save"}
                    color={process === "create" ? "success" : "info"}
                    icon={process === "create" ? <AddIcon /> : <EditIcon />}
                    onClick={submitFormHandler}
                />
            </Stack>
        </Stack>
    );
};

export default CreateEditFrame;
