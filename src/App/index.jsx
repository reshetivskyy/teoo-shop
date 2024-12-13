import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import darkTheme from "./Theme";
import Router from "./Router";

import { GlobalStyles } from "@shared/styles";

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <RouterProvider router={Router} />
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
