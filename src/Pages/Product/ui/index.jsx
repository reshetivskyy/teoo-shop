import { useParams } from "react-router-dom";

import { ImageViewer } from "@widgets/ImageViewer";
import { BreadCrumbs } from "@features/BreadCrumbs";
import { Container } from "@shared/styles";

import photo1 from "@shared/assets/images/product/1.jpg";
import photo2 from "@shared/assets/images/product/2.jpg";
import photo3 from "@shared/assets/images/product/3.jpg";
import photo4 from "@shared/assets/images/product/4.jpg";
import photo5 from "@shared/assets/images/product/5.jpg";
import photoT1 from "@shared/assets/images/product/TYANKAAAAAAAAA.jpg";
import photoT2 from "@shared/assets/images/product/TYANKAAAAAAAAA2.jpg";

const Product = () => {
    const { id } = useParams();
    const images = [photo1, photo2, photo3, photo4, photo5, photoT1, photoT2];

    return (
        <>
            <section>
                <Container>
                    <BreadCrumbs />
                </Container>
            </section>
            <section>
                <Container>
                    <ImageViewer images={images} />
                </Container>
            </section>
        </>
    );
};

export default Product;
