import Styled from "./styled";

const Button = ({ width = "auto", height = "auto", onClick, icon }) => {
    return (
        <Styled.Box onClick={onClick} $width={width} $height={height}>
            <Styled.Image src={icon} alt="icon" />
        </Styled.Box>
    );
};
export default Button;
