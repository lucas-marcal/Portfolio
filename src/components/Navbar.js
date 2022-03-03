import React from "react";
import { Link } from "gatsby";
import { StyledNavbarHeader } from "./styles/Navbar.styled";
import { Container } from "./styles/Container.styled";

export const Navbar = () => {
    return (
        <StyledNavbarHeader>
            <Container>
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
            </Container>
        </StyledNavbarHeader>
    );
};
