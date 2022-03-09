import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledAbout } from "./styles/About.styled";
import { AboutPic } from "./AboutPic";

const About = () => {
    return (
        <StyledAbout>
            <Container className="aboutWrapper" id="aboutContainer">
                <h1 className="aboutTitle">/ Sobre</h1>
                <div className="aboutContentWrapper">
                    <AboutPic />
                    <div>
                        <h1>Programador, Designer, fazedor de várias coisas</h1>
                        <p>
                            A graphic designer with 10+ year experience now
                            diving in deep in the realm of arts combined with
                            technology. A graphic designer with 10+ year
                            experience now diving in deep in the realm of arts
                            combined with technology.
                        </p>
                    </div>
                </div>
            </Container>
        </StyledAbout>
    );
};

export default About;
