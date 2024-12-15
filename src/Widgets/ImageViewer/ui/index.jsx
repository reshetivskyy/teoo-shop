import { useRef, useState } from "react";
import Styled from "./styled";

const ImageViewer = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [clickedImage, setClickedImage] = useState(null);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);

    const sliderRef = useRef();

    const handleOnMouseEnter = (index) => {
        setCurrentImage(index);
    };

    const handleOnMouseLeave = () => {
        setIsZoomed(false);
        if (!clickedImage) {
            setCurrentImage(0);
        } else {
            setCurrentImage(clickedImage);
        }
    };

    const handleOnClick = (index) => {
        setClickedImage(index);
        setCurrentImage(index);
    };

    const handleOnMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { width, height } = target;

        const x = (offsetX / width) * 100;
        const y = (offsetY / height) * 100;

        setZoomPosition({ x, y });
        setIsZoomed(true);
    };

    const handleScroll = (direction) => {
        const slider = sliderRef.current;
        const scrollAmount = slider.clientWidth;

        if (direction === "left") {
            slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else if (direction === "right") {
            slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <Styled.Box>
            <Styled.MainImageBlock
                onMouseMove={handleOnMouseMove}
                onMouseLeave={handleOnMouseLeave}
            >
                <Styled.MainImage
                    src={images[currentImage]}
                    alt="product image"
                    style={{
                        transform: isZoomed ? "scale(2)" : "scale(1)",
                        transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }}
                />
            </Styled.MainImageBlock>
            <Styled.List>
                <Styled.ListButton
                    className="left"
                    onClick={() => handleScroll("left")}
                >
                    {"<"}
                </Styled.ListButton>
                <Styled.ListInner ref={sliderRef}>
                    {images.map((image, index) => (
                        <Styled.ListImage
                            key={index}
                            src={image}
                            alt="List Image"
                            onMouseEnter={() => handleOnMouseEnter(index)}
                            onMouseLeave={handleOnMouseLeave}
                            onClick={() => handleOnClick(index)}
                            $clicked={clickedImage === index}
                        />
                    ))}
                </Styled.ListInner>
                <Styled.ListButton
                    className="right"
                    onClick={() => handleScroll("right")}
                >
                    {">"}
                </Styled.ListButton>
            </Styled.List>
        </Styled.Box>
    );
};

export default ImageViewer;
