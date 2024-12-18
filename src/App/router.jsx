import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import { Main, Wrapper } from "@shared/styles";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import NotFound from "@pages/NotFound";

const Home = lazy(() => import("@pages/Home"));
const Product = lazy(() => import("@pages/Product"));

const Layout = () => {
    return (
        <Wrapper>
            <Header />
            <Main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
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
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export { Router };
