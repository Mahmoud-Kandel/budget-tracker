import { Stack, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { colors } from "../../constants";

interface TabelActionsProps {
    editHandler: () => void;
    deleteHandler: () => void;
}

const TabelActions = (props: TabelActionsProps) => {
    const { deleteHandler, editHandler } = props;
    return (
        <Stack sx={{ flexDirection: "row", columnGap: 2 }}>
            <Tooltip placement='left-end' title={"Edit"}>
                <EditIcon
                    onClick={editHandler}
                    sx={{
                        color: colors.lightBlue,
                        cursor: "pointer",
                    }}
                />
            </Tooltip>
            <Tooltip placement='right-end' title={"Delete"}>
                <DeleteIcon
                    onClick={deleteHandler}
                    sx={{
                        color: colors.lightRed,
                        cursor: "pointer",
                    }}
                />
            </Tooltip>
        </Stack>
    );
};

export default TabelActions;
