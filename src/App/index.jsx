import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "@shared/lib";
import { AppThemeProvider } from "./theme";
import { Router } from "./router";

const App = () => {
    return (
        <ThemeContextProvider>
            <AppThemeProvider>
                <RouterProvider router={Router} />
            </AppThemeProvider>
        </ThemeContextProvider>
    );
};

export default App;
