import * as React from "react";
import TextField from "@mui/material/TextField";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    multiline?: boolean;
    maxLength?: number;
}

export const Input = (props: InputProps) => {
    const { error, id, label, onChange, type, value, multiline, maxLength } =
        props;

    if (multiline) {
        return (
            <TextField
                inputProps={{ maxLength: maxLength }}
                sx={{ flex: 1, my: 2 }}
                error={error ? true : false}
                id={id}
                label={label}
                multiline
                rows={4}
                value={value}
                onChange={onChange}
                helperText={error}
            />
        );
    }

    return (
        <TextField
            inputProps={{ maxLength: maxLength }}
            sx={{ flex: 1, my: 2 }}
            error={error ? true : false}
            id={id}
            label={type === "date" && !value ? "" : label}
            helperText={error}
            type={type}
            value={value}
            onChange={onChange}
        />
    );
};
