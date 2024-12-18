import { RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import { ThemeContextProvider } from "@shared/lib";
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
