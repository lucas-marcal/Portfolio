import styled from "styled-components";

export const StyledNavbarHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.darkbg};
    height: 60px;

    .headerWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        list-style: none;
        display: flex;
    }

    li {
        margin-right: 1.5rem;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
    }

    .secondaryNav {
        font-weight: 300;
    }
`;

export const StyledNav = styled.nav`
    display: flex;
`;
