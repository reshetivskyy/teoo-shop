import { Container } from "@shared/styles";
import Styled from "./styled";

import SearchButton from "@shared/ui/SearchButton";
import Button from "@shared/ui/Button";

import logo from "@shared/assets/images/logo.png";
import instagram from "@shared/assets/images/instagram.svg";
import cart from "@shared/assets/images/cart.svg";
import user from "@shared/assets/images/user.svg";
import search from "@shared/assets/images/search.svg";

const Header = () => {
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
                            <Styled.MenuLink to={"/shuff"}>
                                stuff
                            </Styled.MenuLink>
                        </Styled.MenuItem>
                    </Styled.Menu>
                    <Styled.Quick>
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
