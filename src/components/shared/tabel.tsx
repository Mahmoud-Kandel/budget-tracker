import * as React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Stack,
} from "@mui/material";
import { Amount, CreateBtn, MainHeader } from "..";
import { useLocation, useNavigate } from "react-router-dom";
import { DataProps } from "../../helpers";
import TabelActions from "./tabelActions";

export interface Column {
    id: "no" | "category" | "amount" | "date" | "description" | "actions";
    label: string;
    minWidth?: number;
    align?: "right";
}

interface TabelProps {
    rows: DataProps[];
    columns: Column[];
    deleteRow: (id: string) => void;
    header: string;
}

export const Tabel = (props: TabelProps) => {
    const { rows, columns, deleteRow, header } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if (rows.length === 0) {
        return (
            <Stack sx={{ mt: 5 }}>
                <MainHeader content={header} />
                {pathname !== "/summary" && <CreateBtn />}
            </Stack>
        );
    }

    return (
        <Stack sx={{ mt: 5 }}>
            <MainHeader content={header} />
            {pathname !== "/summary" && <CreateBtn />}
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer>
                    <Table stickyHeader aria-label='sticky table'>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, i) => {
                                    return (
                                        <TableRow
                                            hover
                                            role='checkbox'
                                            tabIndex={-1}
                                            key={row.id}
                                        >
                                            {columns.map((column) => {
                                                const value =
                                                    column.id === "no" ? (
                                                        i + 1
                                                    ) : column.id ===
                                                      "amount" ? (
                                                        <Amount
                                                            amount={
                                                                row[column.id]
                                                            }
                                                            color={
                                                                pathname ===
                                                                "/expenses"
                                                                    ? "red"
                                                                    : "green"
                                                            }
                                                        />
                                                    ) : column.id ===
                                                      "actions" ? (
                                                        <TabelActions
                                                            deleteHandler={() =>
                                                                deleteRow(
                                                                    row.id
                                                                )
                                                            }
                                                            editHandler={() =>
                                                                navigate(
                                                                    `edit/${row.id}`
                                                                )
                                                            }
                                                        />
                                                    ) : (
                                                        row[column.id]
                                                    );
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Stack>
    );
};
