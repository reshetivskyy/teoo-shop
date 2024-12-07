import Styled from "./styled";

const Button = ({ icon }) => {
    return (
        <Styled.Box>
            <img src={icon} alt="icon" />
        </Styled.Box>
    );
};

export default Button;
