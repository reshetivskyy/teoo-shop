import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { darkTheme } from "./theme";
import { router } from "./router";

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default App;
