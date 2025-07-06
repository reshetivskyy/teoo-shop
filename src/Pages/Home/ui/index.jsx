import { ProductCard } from "@entities/ProductCard";
import { Container, Title } from "@shared/styles";
import { useLoadProducts } from "../lib";

import Styled from "./styled";
import { Link } from "react-router-dom";

const Home = () => {
    const { data: products, isLoading, isError } = useLoadProducts();
    // console.log(products);

    if (isLoading) return <p>is loading</p>;
    if (isError) return <p>is error</p>;

    return (
        <Container>
            {/* <Link to={""} /> */}
            <Title>T-shorts</Title>
            <Styled.Products>
                {products.map(({ id }) => (
                    <ProductCard
                        key={id}
                        id={id}
                        title={"T-short"}
                        desc={"123123"}
                        image={"https://placehold.co/600"}
                        price={300}
                    />
                ))}
            </Styled.Products>
        </Container>
    );
};

export default Home;
