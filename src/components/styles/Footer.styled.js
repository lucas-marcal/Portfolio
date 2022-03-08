import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 10vh;

    .mainContentFooter {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 2vh;
    }

    p {
        color: ${({ theme }) => theme.colors.darkerbg};
        margin-top: 1vh;
    }
`;

export const StyledPreFooter = styled.section`
    background-color: ${({ theme }) => theme.colors.darkerbg};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 36px;
    text-align: center;
    padding-bottom: 1vh;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        padding: 10px;
        transition: color 0.2s;
        &:hover {
            color: #229d53;
        }
    }
`;
