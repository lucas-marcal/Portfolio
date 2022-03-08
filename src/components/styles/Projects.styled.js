import styled from "styled-components";

export const StyledProjectsSection = styled.section`
    .projectsWrapper {
        padding: 60px 20px;
    }

    .projectsTitulo {
        margin-left: 3vw;
        margin-bottom: 6vh;
    }

    .cardsWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }

    .projectsBtnWrapper {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }

    .projects-btn {
        box-shadow: 0px 6px 8px #2a2a2a;
    }

    h1 {
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: 70px;
    }
`;
