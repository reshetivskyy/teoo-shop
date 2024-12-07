import styled from "styled-components";

const Box = styled.div`
    display: inline-flex;
    justify-content: center;
    padding: 14px;
    max-height: 52px;
    gap: 20px;
    align-items: center;
    box-shadow: 0px 0px 36.2px 11px rgba(0, 0, 0, 0.05);
    background-color: #fff;
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
    position: absolute;
    left: 100%;
    transition: all 0.2s ease-in-out;
    ${({ $hover }) => $hover && "position: static !important;"};
`;

const Styled = {
    Box,
    Input,
};

export default Styled;
