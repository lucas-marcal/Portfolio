import styled from "styled-components";

export const StyledFeatured = styled.section`
    background-color: ${({ theme }) => theme.colors.darkerbg};

    p {
        margin-bottom: 1.5rem;
        font-size: 18pt;
        font-weight: 300;

        span {
            font-weight: 600;
        }
    }

    h1 {
        margin-bottom: 0.7rem;
        font-size: 42px;
    }

    h5 {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 400;
    }

    .featuredWrapper {
        position: relative;
        display: grid;
        padding: 0 50px;
    }

    .profilepic {
        opacity: 0.5;
    }

    .content {
        margin-left: -30px;
        z-index: 10;
        align-self: center;
        padding: 60px 0;
        grid-area: 1/1;
        position: relative;
        place-items: center;
        max-width: 480px;
    }

    .bgimg {
        height: 100%;
    }
`;
