import styled from "styled-components";

export const Wrapper = styled.div `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        border: 1px solid lightblue;
        border-radius: 20px;
        background: #fff;

    button {
        border-radius: 0 0 20px 20px;
    }
    img {
        max-width: 250px;
        border-radius: 20px 20px 0 0;
        object-fit: cover;
    }
    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%; 
    }
`;