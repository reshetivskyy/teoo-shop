import { createBrowserRouter, Outlet } from "react-router-dom";

import { Home } from "@pages/Home";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";

import { Main, Wrapper } from "@shared/styles";
import { Product } from "@pages/Product";

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
            {
                path: "/new-collection/product/:id",
                element: <Product />,
            },
        ],
    },
]);

export { Router };
