import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
    }

    #root {
        width: 100%;
        background-color: #917dfc;
    }
`;

export default Global;
