import { useParams } from "react-router-dom";

import { BreadCrumbs } from "@features/BreadCrumbs";
import { Container } from "@shared/styles";

const Product = () => {
    const { id } = useParams();

    return (
        <>
            <section>
                <Container>
                    <BreadCrumbs />
                </Container>
            </section>
        </>
    );
};

export default Product;
