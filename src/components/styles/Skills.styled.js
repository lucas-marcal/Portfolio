import styled from "styled-components";

export const StyledSkillsSection = styled.section`
    .skillsWrapper {
        padding: 9vh 6vw;
    }

    .skillsTitle {
        margin-left: 3vw;
        margin-bottom: 2vh;
        color: ${({ theme }) => theme.colors.secondary};
    }

    .skillsContentWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .badgesWrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .tagsWrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 2vh;
        justify-content: center;

        .tag {
            background-color: ${({ theme }) => theme.colors.darkerbg};
            align-self: center;
            justify-self: center;
            padding: 12px 12px;
            margin: 5px 6px;
            border-radius: 5px;
        }

        span {
            color: ${({ theme }) => theme.colors.primary};
            font-size: 3rem;
            font-weight: 600;
            margin: 5px 6px;
        }
    }
`;
