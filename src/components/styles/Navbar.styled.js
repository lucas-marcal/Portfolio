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

    .hamburger-btn {
        width: 4rem;
        height: 3rem;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: none;
        border: none;
        z-index: 10;
        transition: transform 0.2s;

        div {
            width: 2.5rem;
            height: 1px;
            margin: 5px 0;
            background-color: ${({ theme }) => theme.colors.secondary};
            border-radius: 0;
        }

        @media (min-width: 750px) {
            display: none;
        }
    }

    .hamburger-btn-open {
        transform: rotate(225deg);
        position: fixed;
        top: 16px;
        right: 20px;

        div {
            margin: 0;
        }

        div:first-child {
            transform: rotate(-90deg);
        }

        div:nth-child(2) {
            display: none;
        }
    }

    .showExtNavbar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgb(0, 0, 0, 0.9);
        z-index: 9;
    }

    .hiddenExtNavbar {
        display: none;
    }

    .extNavbarWrapper {
        display: flex;
        flex-flow: column nowrap;
        position: relative;

        .extNavbar {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            ul {
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;

                li {
                    font-size: 24px;
                    margin: 20px 0;

                    a {
                        padding: 10px;
                    }
                }
            }
        }
    }

    .primaryNav {
        @media (max-width: 749px) {
            display: none;
        }
    }

    .secondaryNav {
        font-weight: 300;
        @media (max-width: 749px) {
            display: none;
        }
    }
`;

export const StyledNav = styled.nav`
    display: flex;
`;
