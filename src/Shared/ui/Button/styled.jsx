import styled from "styled-components";

const Box = styled.button`
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
    cursor: pointer;
    transition: 0.3s all ease-in-out;

    &:hover {
        box-shadow: 0px 0px 36.2px 11px rgba(0, 0, 0, 0.12);
    }
`;

const Styled = {
    Box,
};

export default Styled;
