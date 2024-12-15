import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { ThemeContextProvider } from "@shared/lib";
import { AppThemeProvider } from "./Theme";

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
