import styled from "styled-components";

export const StyledFeatured = styled.section`
    background-color: ${({ theme }) => theme.colors.darkerbg};

    p {
        margin-bottom: 1rem;
        font-size: 16pt;

        span {
            font-weight: 600;
        }
    }

    h1 {
        margin-bottom: 0.7rem;
    }

    h5 {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 400;
    }

    .featuredWrapper {
        position: relative;
        display: grid;
        grid-template-columns: 2fr 3fr;
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
    }

    .bgimg {
        height: 100%;
    }
`;
