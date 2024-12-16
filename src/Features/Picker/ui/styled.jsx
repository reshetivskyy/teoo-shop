import styled from "styled-components";

const Box = styled.div`
    display: inline-flex;
    max-width: 100%;
    gap: 10px;
    padding: 10px;
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: 5px;
`;

const SizeButton = styled.button`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 1000px;
    color: ${({ theme, $clicked }) =>
        $clicked ? theme.colors.bg : theme.colors.text};
    background-color: ${({ theme, $clicked }) =>
        $clicked ? theme.colors.text : theme.colors.bg};
    box-shadow: ${({ theme, $clicked }) => ($clicked ? "none" : theme.shadow)};
`;

const ColorButton = styled.button`
    background-color: ${({ $color }) => $color};
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    box-shadow: ${({ theme, $clicked }) => ($clicked ? "none" : theme.shadow)};
    position: relative;
    cursor: pointer;
    border-radius: 1000px;
    overflow: hidden;

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

const Styled = { Box, SizeButton, ColorButton };

export default Styled;
