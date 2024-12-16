import styled from "styled-components";

const Box = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: ${({ $height }) => $height};
    width: ${({ $width }) => $width};
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: 1000px;
    border: 0;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    overflow: hidden;
    padding: 0;
    background-color: transparent;

    &:hover {
        box-shadow: ${({ theme }) => theme.activeShadow};
    }
`;

const Image = styled.img`
    filter: invert(
        ${({ theme }) => (theme.colors.bg === "#fff" ? "0%" : "100%")}
    );
`;

const Styled = {
    Box,
    Image,
};

export default Styled;
