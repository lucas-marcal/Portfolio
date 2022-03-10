import React, { useState } from "react";
import { StyledNavbarHeader } from "./styles/Navbar.styled";
import { Container } from "./styles/Container.styled";
import { LmLogo } from "./LmLogo";

const navLinks = [
    { navLinkId: "Projetos", scrollToId: "projectsContainer" },
    { navLinkId: "Sobre", scrollToId: "aboutContainer" },
    { navLinkId: "Skills", scrollToId: "skillsContainer" },
    { navLinkId: "Contato", scrollToId: "contactContainer" },
];

const NavLink = ({
    navLinkId,
    scrollToId,
    activeNavLinkId,
    setActiveNavLinkId,
    click,
}) => {
    const handleClick = () => {
        click();
        setActiveNavLinkId(navLinkId);
        document.getElementById(scrollToId).scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <li key={navLinkId}>
            <button
                id={navLinkId}
                className={
                    activeNavLinkId === navLinkId
                        ? "navbtn navbtn-active"
                        : "navbtn"
                }
                onClick={handleClick}
            >
                {navLinkId}
            </button>
        </li>
    );
};

export const Navbar = () => {
    const [show, setShow] = useState(false);
    const [activeNavLinkId, setActiveNavLinkId] = useState("");

    const showExtNavHandler = () => setShow(false);

    return (
        <StyledNavbarHeader>
            <Container className="headerWrapper">
                <button
                    className="navbtn"
                    onClick={() => {
                        setActiveNavLinkId("");
                        document
                            .getElementById("featuredContainer")
                            .scrollIntoView({
                                behavior: "smooth",
                            });
                    }}
                >
                    <LmLogo />
                </button>
                <nav className="primaryNav">
                    <ul>
                        {navLinks.map(({ navLinkId, scrollToId }) => (
                            <NavLink
                                navLinkId={navLinkId}
                                scrollToId={scrollToId}
                                activeNavLinkId={activeNavLinkId}
                                setActiveNavLinkId={setActiveNavLinkId}
                                click={showExtNavHandler}
                            />
                        ))}
                    </ul>
                </nav>
                <nav className="secondaryNav">
                    <ul>
                        <li key="GitHub">
                            <a
                                href="https://github.com/lucas-marcal"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li key="LinkedIn">
                            <a
                                href="https://www.linkedin.com/in/marcal-lucas/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
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
                                {navLinks.map(({ navLinkId, scrollToId }) => (
                                    <NavLink
                                        navLinkId={navLinkId}
                                        scrollToId={scrollToId}
                                        activeNavLinkId={activeNavLinkId}
                                        setActiveNavLinkId={setActiveNavLinkId}
                                        click={showExtNavHandler}
                                    />
                                ))}
                            </ul>
                            <ul className="secondaryExtendedNavbar">
                                <li key="GitHub">
                                    <a
                                        href="https://github.com/lucas-marcal"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li key="LinkedIn">
                                    <a
                                        href="https://www.linkedin.com/in/marcal-lucas/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Container>
        </StyledNavbarHeader>
    );
};
