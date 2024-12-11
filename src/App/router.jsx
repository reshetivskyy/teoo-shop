import { createBrowserRouter, Outlet } from "react-router-dom";

import { Home } from "@pages/Home";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";

import { Main, Wrapper } from "@shared/styles";

const Layout = () => {
    return (
        <Wrapper>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Wrapper>
    );
};
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

export { Router };
