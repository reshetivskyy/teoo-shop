import Styled from "./styled";

const CartItem = ({ image, name, color, size, price, count, setCount }) => {
    return (
        <Styled.Container>
            <Styled.Image src={image} alt={name} />
            <Styled.Name>{name}</Styled.Name>
            <Styled.Details>
                <Styled.Color>Color: {color}</Styled.Color>
                <Styled.Size>Size: {size}</Styled.Size>
            </Styled.Details>
            <Styled.Price>${price.toFixed(2)}</Styled.Price>
            <Styled.Counter>
                <Styled.ConterButton
                    onClick={() => setCount(count - 1)}
                    disabled={count <= 1}
                >
                    -
                </Styled.ConterButton>
                <Styled.CounterValue>{count}</Styled.CounterValue>
                <Styled.ConterButton onClick={() => setCount(count + 1)}>
                    +
                </Styled.ConterButton>
            </Styled.Counter>
        </Styled.Container>
    );
};

export default CartItem;
