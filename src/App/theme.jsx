import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@shared/styles";
import { useTheme } from "@shared/lib";

const AppThemeProvider = ({ children }) => {
    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export { AppThemeProvider };
