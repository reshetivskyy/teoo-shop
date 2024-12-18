import { Container } from "@shared/styles";
import Styled from "./styled";

import SearchButton from "@shared/ui/SearchButton";
import Button from "@shared/ui/Button";
import { useTheme } from "@shared/lib";

import logo from "@shared/assets/images/logo.png";
import instagram from "@shared/assets/images/instagram.svg";
import cart from "@shared/assets/images/cart.svg";
import user from "@shared/assets/images/user.svg";
import search from "@shared/assets/images/search.svg";
import bulb from "@shared/assets/images/bulb.svg";

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <Styled.Header>
            <Container>
                <Styled.Box>
                    <Styled.Logo src={logo} alt="logo" />
                    <Styled.Menu>
                        <Styled.MenuItem>
                            <Styled.MenuLink to={"/"}>new</Styled.MenuLink>
                        </Styled.MenuItem>
                        <Styled.MenuItem>
                            <Styled.MenuLink to={"/t-shorts"}>
                                t-shorts
                            </Styled.MenuLink>
                        </Styled.MenuItem>
                        <Styled.MenuItem>
                            <Styled.MenuLink to={"/hoodies"}>
                                hoodies
                            </Styled.MenuLink>
                        </Styled.MenuItem>
                        <Styled.MenuItem>
                            <Styled.MenuLink to={"/stuff"}>
                                stuff
                            </Styled.MenuLink>
                        </Styled.MenuItem>
                    </Styled.Menu>
                    <Styled.Quick>
                        <Button
                            onClick={toggleTheme}
                            icon={bulb}
                            width="52px"
                            height="52px"
                        />
                        <Button icon={instagram} width="52px" height="52px" />
                        <Button icon={cart} width="52px" height="52px" />
                        <Button icon={user} width="52px" height="52px" />
                        <SearchButton icon={search} />
                    </Styled.Quick>
                </Styled.Box>
            </Container>
        </Styled.Header>
    );
};

export default Header;
