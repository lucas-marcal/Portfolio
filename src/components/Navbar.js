import React from "react";
import { Link } from "gatsby";
import { StyledNavbarHeader } from "./styles/Navbar.styled";
import { Container } from "./styles/Container.styled";
import { LmLogo } from "./LmLogo";

export const Navbar = () => {
    return (
        <StyledNavbarHeader>
            <Container className="headerWrapper">
                <LmLogo />
                <nav>
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
            </Container>
        </StyledNavbarHeader>
    );
};
