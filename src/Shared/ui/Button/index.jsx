import { Text } from "@shared/styles";
import Styled from "./styled";

const Button = ({
    width = "auto",
    height = "auto",
    clicked = false,
    onClick,
    icon,
    color,
    text,
}) => {
    return (
        <Styled.Box
            onClick={onClick}
            $width={width}
            $height={height}
            $clicked={text && clicked}
        >
            {icon ? (
                <img src={icon} alt="icon" />
            ) : color ? (
                <Styled.Color
                    $width={width}
                    $height={height}
                    $color={color}
                    $clicked={clicked}
                />
            ) : text ? (
                <Text $color={clicked ? "#fff" : "#000"}>{text}</Text>
            ) : null}
        </Styled.Box>
    );
};
export default Button;
