import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";
import { StyledFooter, StyledPreFooter } from "./styles/Footer.styled";

const Footer = () => {
    const ano = new Date().getFullYear();

    return (
        <StyledFooter>
            <StyledPreFooter>
                <div>
                    <a
                        href="https://github.com/lucas-marcal"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/marcal-lucas/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </StyledPreFooter>
            <div className="mainContentFooter">
                <div className="footerImg">
                    <StaticImage
                        src="../images/LM-logo-footer.svg"
                        alt="Lucas Marçal Logo"
                        placeholder="blurred"
                        layout="fixed"
                        height={60}
                    />
                </div>
                <p>lucasmarcal.com &copy; {ano}</p>
            </div>
        </StyledFooter>
    );
};

export default Footer;
