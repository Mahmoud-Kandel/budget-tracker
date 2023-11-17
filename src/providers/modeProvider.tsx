import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../context";
import { Header } from "../components";
import { colors } from "../constants";
import { useLocation } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

interface ModeProviderProps {
    children: React.ReactNode;
}

export const ModeProvider = (props: ModeProviderProps) => {
    const { pathname } = useLocation();
    const theme = useTheme();
    const colorMode = React.useContext(ThemeContext);

    return (
        <Box
            sx={{
                display: "flex",
                width: "100vw",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    borderBottom: 1,
                    p: 2,
                    borderBottomColor:
                        theme.palette.mode === "light"
                            ? colors.lightGray
                            : colors.lightDark,
                    mb: 1,
                }}
            >
                <Stack
                    sx={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Header />
                    <Typography
                        sx={{
                            textTransform: "capitalize",
                            opacity: 0.5,
                            fontSize: 14,
                        }}
                    >
                        {pathname
                            .split("/")
                            .map((one) =>
                                one.length > 8 ? `${one.slice(0, 7)}...` : one
                            )
                            .join("/")
                            .replace(/\//g, "  /  ")}
                    </Typography>
                </Stack>
                <IconButton
                    sx={{ ml: 1 }}
                    onClick={colorMode.toggleColorMode}
                    color='inherit'
                >
                    {theme.palette.mode === "dark" ? (
                        <Brightness7Icon />
                    ) : (
                        <Brightness4Icon />
                    )}
                </IconButton>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    width: "100%",
                    px: 1,
                }}
            >
                {props.children}
            </Box>
        </Box>
    );
};
