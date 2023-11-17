import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { IncomeProvider, ExpenseProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ExpenseProvider>
            <IncomeProvider>
                <App />
            </IncomeProvider>
        </ExpenseProvider>
    </BrowserRouter>
);
