import styled from "styled-components";

export const StyledContact = styled.section`
    background-color: ${({ theme }) => theme.colors.darkerbg};

    .contactWrapper {
        padding: 9vh 6vw;

        p {
            font-style: italic;
            font-weight: 200;
            font-size: 24px;
            padding: 0 3vw;
        }
    }

    .contactTitle {
        margin-left: 3vw;
        margin-bottom: 3vh;
        color: ${({ theme }) => theme.colors.secondary};
    }
`;
