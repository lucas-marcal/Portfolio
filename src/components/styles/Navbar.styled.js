import styled from "styled-components";

export const StyledNavbarHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.darkbg};
    position: sticky;
    top: 0;
    z-index: 11;

    .headerWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;

        button {
            background: none;
            border: none;
            cursor: pointer;
        }
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

    .navtbn {
        color: ${({ theme }) => theme.colors.primary};
        font-family: "Montserrat", sans-serif;
        transition: color 0.2s;
        background: none;
        border: none;
        &:hover {
            color: #229d53;
        }
    }

    .navbtn-active {
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
        z-index: 12;
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

            .secondaryExtendedNavbar {
                li {
                    margin: 15px 0;
                }
            }

            ul {
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                margin: 20px 0;

                button {
                    color: ${({ theme }) => theme.colors.primary};
                    font-family: "Montserrat", sans-serif;
                    font-size: 24px;
                    font-weight: 400;
                    padding: 10px;
                    background: none;
                    border: none;
                    transition: color 0.2s;
                    cursor: pointer;
                    &:hover {
                        color: #229d53;
                    }
                }

                li {
                    font-size: 24px;
                    margin: 10px 0;

                    a {
                        padding: 10px;
                        font-weight: 300;
                    }
                }
            }
        }
    }

    .primaryNav {
        button {
            color: ${({ theme }) => theme.colors.primary};
            font-family: "Montserrat", sans-serif;
            font-size: 1.1rem;
            font-weight: 400;
            padding: 10px;
            background: none;
            border: none;
            transition: color 0.2s;
            cursor: pointer;
            &:hover {
                color: #229d53;
            }
        }

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
