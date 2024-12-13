import { Link, useLocation } from "react-router-dom";
import Styled from "./styled";
import { capitalize } from "../lib";
import { getProductName } from "../api";

const BreadCrumbs = () => {
    const location = useLocation();
    let currentLink = "";

    const crumbs = location.pathname
        .split("/")
        .filter((crumb) => crumb !== "")
        .map((crumb, index, array) => {
            currentLink += `/${crumb}`;
            if (index === array.length - 1 && !isNaN(Number(crumb))) {
                return (
                    <Styled.Item key={crumb}>
                        {getProductName(crumb)}
                    </Styled.Item>
                );
            }
            if (crumb === "product") {
                return;
            }
            if (index === array.length - 1) {
                return (
                    <Styled.Item key={crumb}>{capitalize(crumb)}</Styled.Item>
                );
            }
            return (
                <Styled.Item key={crumb}>
                    <Link to={currentLink}>{capitalize(crumb)}</Link>
                </Styled.Item>
            );
        });

    return (
        <Styled.Box>
            <Styled.Item>
                <Link to={"/"}>Home</Link>
            </Styled.Item>
            {crumbs}
        </Styled.Box>
    );
};

export default BreadCrumbs;
