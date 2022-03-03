import styled from "styled-components";

export const StyledNavbarHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.darkbg};

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const StyledNav = styled.nav`
    display: flex;
`;
