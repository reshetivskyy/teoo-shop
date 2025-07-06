import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const Container = styled.div`
    background: white;
    padding: 24px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
`;

const Styled = { Overlay, Container, CloseButton };

export default Styled;
