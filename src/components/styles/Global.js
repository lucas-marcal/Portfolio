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

    h1 {
        font-size: 25pt;
    }

    .primary-btn {
        padding: 12px 16px;
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 7px;
        border: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        box-shadow: 0px 10px 8px #222;
        cursor: pointer;
        transition: transform 0.3s;

        &:hover {
            transform: scale(0.98);
        }
    }
`;

export default GlobalStyles;