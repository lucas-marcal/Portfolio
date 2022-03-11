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
        font-size: 16px;
        padding: 18px 22px;
        /* background-color: ${({ theme }) => theme.colors.secondary}; */
        background: linear-gradient(135deg, rgba(144,255,105,1) 0%, rgba(55,255,135,1) 100%);
        border-radius: 7px;
        border: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            transform: scale(0.99) translate(0px, 2px);
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
    }
`;

export default GlobalStyles;
