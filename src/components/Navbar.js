import React, { useState } from "react";
import { Link } from "gatsby";
import { StyledNavbarHeader } from "./styles/Navbar.styled";
import { Container } from "./styles/Container.styled";
import { LmLogo } from "./LmLogo";

export const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <StyledNavbarHeader>
            <Container className="headerWrapper">
                <LmLogo />
                <nav className="primaryNav">
                    <ul>
                        <li>
                            <Link to="/#">Projetos</Link>
                        </li>
                        <li>
                            <Link to="/#">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/#">Skills</Link>
                        </li>
                        <li>
                            <Link to="/#">Contato</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="secondaryNav">
                    <ul>
                        <li>
                            <a href="https://">GitHub</a>
                        </li>
                        <li>
                            <a href="https://">LinkedIn</a>
                        </li>
                    </ul>
                </nav>
                <button
                    className={
                        show
                            ? "hamburger-btn-open hamburger-btn"
                            : "hamburger-btn"
                    }
                    onClick={() => setShow(!show)}
                >
                    <div />
                    <div />
                    <div />
                </button>

                <div className={show ? "showExtNavbar" : "hiddenExtNavbar"}>
                    <div className="extNavbarWrapper">
                        <nav className="extNavbar">
                            <ul>
                                <li>
                                    <Link to="/#">Projetos</Link>
                                </li>
                                <li>
                                    <Link to="/#">Sobre</Link>
                                </li>
                                <li>
                                    <Link to="/#">Skills</Link>
                                </li>
                                <li>
                                    <Link to="/#">Contato</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="https://">GitHub</a>
                                </li>
                                <li>
                                    <a href="https://">LinkedIn</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Container>
        </StyledNavbarHeader>
    );
};
