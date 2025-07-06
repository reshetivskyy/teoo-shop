import styled, { ThemeConsumer } from "styled-components";

const Box = styled.div`
    border-radius: 15px;
    overflow: hidden;
    max-width: 330px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
`;

const Data = styled.div`
    padding: 10px 17px;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Name = styled.h2`
    font-size: 28px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
`;

const Desc = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
`;

const Buy = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`;

const Prices = styled.div`
    position: relative;
`;

const FullPrice = styled.p`
    font-size: 14px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
`;

const Price = styled.p`
    font-size: 28px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
`;

const Styled = { Box, Image, Data, Name, Desc, Buy, Prices, FullPrice, Price };

export default Styled;
