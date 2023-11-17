import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import WalletIcon from "@mui/icons-material/Wallet";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { colors } from "../constants";
import Tooltip from "@mui/material/Tooltip/Tooltip";

type Anchor = "left";

const HEADER_LINKS = [
    { content: "summary", to: "/summary", icon: <WalletIcon /> },
    { content: "income", to: "/income", icon: <AttachMoneyIcon /> },
    { content: "expenses", to: "/expenses", icon: <MoneyOffIcon /> },
];

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: 250,
            }}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {HEADER_LINKS.map((header) => (
                    <ListItem key={header.content} disablePadding>
                        <Tooltip placement='right-end' title={header.content}>
                            <ListItemButton
                                sx={{
                                    backgroundColor:
                                        location.pathname === header.to
                                            ? colors.lighertBlue
                                            : "",
                                }}
                                onClick={() => {
                                    navigate(header.to);
                                }}
                            >
                                <ListItemIcon>{header.icon}</ListItemIcon>
                                <ListItemText
                                    primary={header.content}
                                    sx={{ textTransform: "capitalize" }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            {(["left"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon />
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
};
