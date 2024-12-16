import { BreadCrumbs } from "@features/BreadCrumbs";
import { ColorPicker, SizePicker } from "@features/Picker";
// import { SizePicker } from "@features/Picker";
import { Container, Text, Title } from "@shared/styles";
import { ImageViewer } from "@widgets/ImageViewer";
import { useState } from "react";

import photo1 from "@shared/assets/images/product/1.jpg";
import photo2 from "@shared/assets/images/product/2.jpg";
import photo3 from "@shared/assets/images/product/3.jpg";
import photo4 from "@shared/assets/images/product/4.jpg";
import photo5 from "@shared/assets/images/product/5.jpg";
import photoT1 from "@shared/assets/images/product/TYANKAAAAAAAAA.jpg";
import photoT2 from "@shared/assets/images/product/TYANKAAAAAAAAA2.jpg";
import Styled from "./styled";
import CartButton from "@features/CartButton/ui";

const sizes = [
    {
        id: 1,
        size: "XS",
    },
    {
        id: 2,
        size: "S",
    },
];

const colors = [
    {
        id: 1,
        color: "#FFC285",
    },
    {
        id: 2,
        color: "#FFF",
    },
];

const Product = () => {
    const [size, onSize] = useState();
    const [color, onColor] = useState();
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
                    <Styled.Box>
                        <ImageViewer images={images} />
                        <Styled.Data>
                            <Styled.Title>T-shirt</Styled.Title>
                            <Styled.Desc>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Necessitatibus doloribus eos
                                maiores? Distinctio eaque, suscipit veniam minus
                                obcaecati, nesciunt voluptas perferendis,
                                reiciendis quidem nobis dolorum consectetur
                                ipsum sapiente dolorem id.
                            </Styled.Desc>
                            <Styled.BuyItems>
                                <SizePicker
                                    items={sizes}
                                    selected={size}
                                    onSelect={onSize}
                                    itemHeight={"52px"}
                                    itemWidth={"52px"}
                                />
                                <ColorPicker
                                    items={colors}
                                    selected={color}
                                    onSelect={onColor}
                                    itemHeight={"52px"}
                                    itemWidth={"52px"}
                                />
                                <CartButton />
                            </Styled.BuyItems>
                        </Styled.Data>
                    </Styled.Box>
                </Container>
            </section>
        </>
    );
};

export default Product;
