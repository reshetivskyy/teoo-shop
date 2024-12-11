import { ToggleLanguage } from "@features/ToggleLanguage";
import { Container, Text } from "@shared/styles";

import Styled from "./styled";

import smalllogo from "@shared/assets/images/small-logo.png";

const Footer = () => {
    return (
        <Styled.Footer>
            <Container>
                <Styled.Box>
                    <img src={smalllogo} alt="logo" />
                    <Text>&copy; Teoo shop 2024</Text>
                    <ToggleLanguage />
                </Styled.Box>
            </Container>
        </Styled.Footer>
    );
};

export default Footer;
