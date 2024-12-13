import { Link } from "react-router-dom";

import CartButton from "@features/CartButton/ui";

import { SubTitle, Text } from "@shared/styles";
import Styled from "./styled";

const ProductCard = ({ id, image, title, desc, price, sale }) => {
    return (
        <Styled.Box>
            <Link to={"/product/" + id}>
                <Styled.Image src={image} alt={id} />
            </Link>
            <Styled.Data>
                <Link to={"/product/" + id}>
                    <Styled.Name>{title}</Styled.Name>
                </Link>
                <Styled.Desc>{desc}</Styled.Desc>
                <Styled.Buy>
                    <Styled.Prices>
                        <Styled.Price>{price} грн</Styled.Price>
                    </Styled.Prices>
                    <CartButton id={id} />
                </Styled.Buy>
            </Styled.Data>
        </Styled.Box>
    );
};

export default ProductCard;
