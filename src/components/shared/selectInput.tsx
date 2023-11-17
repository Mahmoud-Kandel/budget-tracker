import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { InputProps } from "..";

interface SelectInput extends InputProps {
    onChange: (e: SelectChangeEvent) => void;
    value: string;
    selectData: string[];
}

export const SelectInput = (props: SelectInput) => {
    const { error, id, label, onChange, value, selectData } = props;
    return (
        <FormControl sx={{ my: 2, minWidth: 120 }} error={error ? true : false}>
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                value={value}
                label={label}
                onChange={onChange}
            >
                <MenuItem value=''>
                    <em>None</em>
                </MenuItem>
                {selectData.map((one, i) => (
                    <MenuItem key={i} value={one}>
                        {one}
                    </MenuItem>
                ))}
            </Select>
            {error ? <FormHelperText>{error}</FormHelperText> : <></>}
        </FormControl>
    );
};
