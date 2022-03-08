import styled from "styled-components";

export const StyledProjectsSection = styled.section`
    .projectsWrapper {
        padding: 100px 60px;
    }

    .projectsTitulo {
        margin-bottom: 70px;
    }

    .cardsWrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .projectsBtnWrapper {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .projects-btn {
        box-shadow: 0px 6px 8px #2a2a2a;
    }

    h1 {
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: 70px;
    }

    @media (min-width: 670px) {
        .cardsWrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .projectsTitulo {
            margin-left: 30px;
        }
    }

    @media (min-width: 1024px) {
        .cardsWrapper {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;
