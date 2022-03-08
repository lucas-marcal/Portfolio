import styled from "styled-components";

export const StyledAbout = styled.section`
    background-color: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.darkerbg};

    .aboutWrapper {
        padding: 100px 60px;
    }

    .aboutContentWrapper {
        display: grid;
        grid-template-columns: 2fr 4fr;
        gap: 40pt;
        padding-top: 5vh;

        h1 {
            margin-bottom: 4%;
        }

        p {
            font-size: 18pt;
            line-height: 2rem;
        }
    }

    .aboutTitle {
        margin-left: 30px;
    }
`;
