import { useState } from "react";
import Styled from "./styled";

import cart from "@shared/assets/images/cart.svg";

const CartButton = ({ id }) => {
    const [isInCart, setIsInCart] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleOnMouseEnter = () => {
        setIsHover(true);
    };
    const handleOnMouseLeave = () => {
        if (!isInCart) {
            setIsHover(false);
        }
    };
    const handleOnClick = () => {
        setIsInCart(!isInCart);
    };

    return (
        <Styled.Box
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            onClick={handleOnClick}
            $dropShadow={!isHover && !isInCart}
        >
            <Styled.Icon src={cart} alt="cart icon" />
            {(isHover || isInCart) && (
                <Styled.ToCart>
                    {(isInCart && "У кошику") || (isHover && "До кошика")}
                </Styled.ToCart>
            )}
        </Styled.Box>
    );
};

export default CartButton;
