import styled from "styled-components";

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

const Text = styled.h4`
    font-family: "Manrope", serif;
    font-weight: 800;
    font-size: 16px;
`;

const Input = styled.input`
    font-family: "Manrope", serif;
    font-weight: 800;
    font-size: 16px;
    border: 0;
    border-bottom: #ececec solid 2px;
    outline: none;
`;

export { Wrapper, Main, Container, Text, Input };
