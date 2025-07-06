import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import { Main, Wrapper } from "@shared/styles";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { Titles } from "@widgets/Titles";

import NotFound from "@pages/NotFound";
import { BottomNav } from "@widgets/BottomNav";

const Home = lazy(() => import("@pages/Home"));
const Product = lazy(() => import("@pages/Product"));

const Layout = () => {
    return (
        <Wrapper>
            <Titles />
            <Header />
            <Main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Main>
            <BottomNav />
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
                path: "/product/:id",
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
