import styled from "styled-components";

export const StyledNavbarHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.darkbg};

    .headerWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }

    ul {
        list-style: none;
        display: flex;
    }

    li {
        margin-right: 1rem;
        height: 100%;
        transition: transform 0.2s;

        &:hover {
            transform: translate(0px, 1px);
        }
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        padding: 10px;
        transition: color 0.2s;
        &:hover {
            color: #229d53;
        }
    }

    .secondaryNav {
        font-weight: 300;
    }
`;

export const StyledNav = styled.nav`
    display: flex;
`;
