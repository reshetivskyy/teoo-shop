import styled from "styled-components";

const Box = styled.button`
    box-shadow: ${({ $dropShadow }) =>
        $dropShadow ? "0px 0px 36.2px 11px rgba(0, 0, 0, 0.05)" : "none"};
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow};
`;

const Icon = styled.img`
    filter: invert(
        ${({ theme }) => (theme.colors.bg === "#fff" ? "0%" : "100%")}
    );
`;

const ToCart = styled.p`
    font-weight: 800;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
`;

const Styled = {
    Box,
    Icon,
    ToCart,
};

export default Styled;
