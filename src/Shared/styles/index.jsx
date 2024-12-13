import styled, { createGlobalStyle } from "styled-components";

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    display: flex;
`;

const Container = styled.div`
    max-width: 1440px;
    margin-inline: auto;
    padding-inline: 10px;
`;

const Title = styled.h1`
    font-weight: 800;
    font-size: 52px;
    color: ${({ $color }) => $color};
    position: relative;
    display: flex;
    gap: 20px;
    align-items: center;
    white-space: nowrap;

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: #000;
        position: static;
    }
`;

const SubTitle = styled.h2`
    font-weight: 800;
    font-size: 28px;
    color: ${({ $color }) => $color};
`;

const Text = styled.h4`
    font-weight: 800;
    font-size: 16px;
    color: ${({ $color }) => $color};
`;

const Input = styled.input`
    font-weight: 800;
    font-size: 16px;
    border: 0;
    border-bottom: #ececec solid 2px;
    outline: none;
`;

const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: "Manrope", serif;
    }
    *,*::after,*::before{
        box-sizing: inherit;
        font: inherit;
    }
    ul[class],
    ol[class] {
        padding: 0;
    }
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
        margin: 0;
        padding: 0;
    }
    img {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        border: none;
        background-color: transparent;
    }

    a {
        text-decoration: none;
    }
    
`;

export { Wrapper, Main, Container, Title, SubTitle, Text, Input, GlobalStyles };
