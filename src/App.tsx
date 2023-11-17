import { Container } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import { ModeProvider } from "./providers";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "./context";
import { Slide, ToastContainer } from "react-toastify";
import { Expenses, Income, Summary, NotFound, CreateEdit } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { UseTheme } from "./hooks";
function App() {
    const { colorMode, theme, mode } = UseTheme();

    return (
        <ThemeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <ModeProvider>
                    <Container maxWidth='xl'>
                        <Routes>
                            <Route
                                path='/'
                                element={<Navigate replace to='/summary' />}
                            />
                            <Route path='/summary' element={<Summary />} />
                            <Route path='/income' element={<Income />} />
                            <Route path='/expenses' element={<Expenses />} />
                            <Route
                                path='/income/:process/:id?'
                                element={<CreateEdit />}
                            />
                            <Route
                                path='/expenses/:process/:id?'
                                element={<CreateEdit />}
                            />
                            <Route path='/*' element={<NotFound />} />
                        </Routes>
                        <ToastContainer
                            position='top-right'
                            autoClose={2000}
                            theme={mode}
                            transition={Slide}
                        />
                    </Container>
                </ModeProvider>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
