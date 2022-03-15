import styled from "styled-components";

export const StyledAbout = styled.section`
    background-color: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.darkerbg};

    .aboutWrapper {
        padding: 100px 30px;
    }

    .aboutContentWrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20pt;
        padding-top: 5vh;

        h1 {
            margin-bottom: 30px;
            margin-top: 10px;
        }

        .aboutSubTitleWrapper {
            margin-bottom: 30px;
            margin-top: 10px;
        }

        .aboutSubTitle {
            color: white;
            font-size: 25pt;
            font-weight: 600;
            background-color: ${({ theme }) => theme.colors.darkbg};
            padding: 10px;
            line-height: 4.5rem;
        }

        p {
            font-size: 18pt;
            line-height: 2rem;
            margin-bottom: 20px;
        }
    }

    @media (min-width: 670px) {
        .aboutWrapper {
            padding: 100px 60px;
        }
    }

    @media (min-width: 910px) {
        /* .aboutContentWrapper {
            display: grid;
            grid-template-columns: 2fr 4fr;
        } */

        .aboutTitle {
            margin-left: 30px;
        }
    }
`;
