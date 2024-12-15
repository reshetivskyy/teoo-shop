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

const Color = styled.span`
    background-color: ${({ $color }) => $color};
    width: 100%;
    height: 100%;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: ${({ $clicked }) =>
            $clicked ? "#0000001A" : "none"};
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: ${({ $clicked }) =>
            $clicked
                ? `url('data:image/svg+xml;charset=UTF-8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 11.917L9.724 16.5L19 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>') center center no-repeat`
                : "none"};
    }
`;

const Image = styled.img`
    filter: invert(
        ${({ theme }) => (theme.colors.bg === "#fff" ? "0%" : "100%")}
    );
`;

const Styled = {
    Box,
    Color,
    Image,
};

export default Styled;
