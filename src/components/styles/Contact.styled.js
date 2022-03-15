import styled from "styled-components";

export const StyledContact = styled.section`
    background-color: ${({ theme }) => theme.colors.darkerbg};

    .contactWrapper {
        padding: 100px 30px;
    }

    .contactTxt {
        font-style: italic;
        font-weight: 200;
        font-size: 20px;
        padding: 0 3vw;
        margin-bottom: 2vh;
    }

    .successTxt {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        margin-top: 5vh;
        color: ${({ theme }) => theme.colors.secondary};
    }

    .contactTitle {
        margin-left: 3vw;
        margin-bottom: 3vh;
        color: ${({ theme }) => theme.colors.secondary};
    }

    @media (min-width: 670px) {
        .contactWrapper {
            padding: 100px 60px;
        }

        .contactTxt {
            font-style: italic;
            font-weight: 200;
            font-size: 24px;
            padding: 0 3vw;
            margin-bottom: 2vh;
        }
    }
`;
