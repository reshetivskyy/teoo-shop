import styled from "styled-components";

const Box = styled.div`
    display: inline-flex;
    justify-content: center;
    padding: 14px;
    max-height: 52px;
    gap: 20px;
    align-items: center;
    box-shadow: ${({ theme }) => theme.shadow};
    background-color: transparent;
    border-radius: 1000px;
    border: 0;
    transition: 0.3s all ease-in-out;
    position: relative;
    overflow: hidden;

    &:hover {
        box-shadow: 0;
    }
`;

const Input = styled.div`
    left: 100%;
    transition: all 0.2s ease-in-out;
    position: ${({ $hover }) => ($hover ? "static !important;" : "absolute")};
    color: ${({ theme }) => theme.colors.text};

    &::placeholder {
        color: ${({ theme }) => theme.colors.text};
    }
`;

const Image = styled.img`
    filter: invert(
        ${({ theme }) => (theme.colors.bg === "#fff" ? "0%" : "100%")}
    );
`;

const Styled = {
    Box,
    Input,
    Image,
};

export default Styled;
