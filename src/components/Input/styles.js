import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #fafafa;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    margin: 20px 0;

    input {
        background-color: transparent;
        border: none;
        width: 100%;
        height: 62px;
        padding: 0 20px;
        color: #fff;
        font-size: 18px;
    }

    input:focus {
        outline: 0;
    }
`