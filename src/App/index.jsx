import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "@shared/lib";
import { Analytics } from "@vercel/analytics/react";
import { AppThemeProvider } from "./theme";
import { Router } from "./router";

const App = () => {
    return (
        <ThemeContextProvider>
            <AppThemeProvider>
                <RouterProvider router={Router} />
                <Analytics />
            </AppThemeProvider>
        </ThemeContextProvider>
    );
};

export default App;
