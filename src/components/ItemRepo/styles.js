import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa60;
        margin-bottom: 10px;
    }

    a {
        color: #fafafa;
        text-decoration: none;
        font-size: 12px;
    }

    a:hover {
        border-bottom: 1px solid #fafafa;
    }

    a.remove {
        color: #ff4500;
        text-decoration: none;
        font-size: 12px;
    }

    a.remove:hover {
        border-bottom: 1px solid #ff4500;
    }

    hr {
        color: #fafafa60;
        margin: 20px 0;
    }
`