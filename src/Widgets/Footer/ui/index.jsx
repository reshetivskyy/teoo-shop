import { ToggleLanguage } from "@features/ToggleLanguage";
import { Container, Text } from "@shared/styles";

import Styled from "./styled";

import smalllogo from "@shared/assets/images/small-logo.png";

const Footer = () => {
    return (
        <section>
            <Container>
                <Styled.Box>
                    <img src={smalllogo} alt="logo" />
                    <Text>&copy; Teoo shop 2024</Text>
                    <ToggleLanguage />
                </Styled.Box>
            </Container>
        </section>
    );
};

export default Footer;
