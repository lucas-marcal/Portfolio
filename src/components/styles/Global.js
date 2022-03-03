import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        color: white;
        background-color: ${({ theme }) => theme.colors.darkbg};
    }
`;

export default GlobalStyles;
