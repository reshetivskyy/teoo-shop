import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const Box = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Logo = styled.img``;

const Menu = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 30px;
`;

const MenuItem = styled.li``;

const MenuLink = styled(NavLink)`
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    &.active {
        font-weight: 800;
    }
`;

const Quick = styled.div`
    display: flex;
    gap: 10px;
`;

const Styled = { Header, Box, Logo, Menu, MenuItem, MenuLink, Quick };

export default Styled;
