import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledSkillsSection } from "./styles/Skills.styled";
import { StaticImage } from "gatsby-plugin-image";

const Skills = () => {
    return (
        <StyledSkillsSection>
            <Container className="skillsWrapper" id="skillsContainer">
                <h1 className="skillsTitle">/ Skills</h1>
                <div className="skillsContentWrapper">
                    <div className="badgesWrapper">
                        <StaticImage
                            src="../images/badges/ui-ux.svg"
                            alt=""
                            placeholder="blurred"
                            layout="fixed"
                            width={150}
                            style={{
                                margin: "20px",
                            }}
                        />
                        <StaticImage
                            src="../images/badges/html5.svg"
                            alt=""
                            placeholder="blurred"
                            layout="fixed"
                            width={95}
                            style={{
                                margin: "20px",
                            }}
                        />
                        <StaticImage
                            src="../images/badges/css3.svg"
                            alt=""
                            placeholder="blurred"
                            layout="fixed"
                            width={95}
                            style={{
                                margin: "20px",
                            }}
                        />
                        <StaticImage
                            src="../images/badges/javascript.svg"
                            alt=""
                            placeholder="blurred"
                            layout="fixed"
                            width={95}
                            style={{
                                margin: "20px",
                            }}
                        />
                        <StaticImage
                            src="../images/badges/react.svg"
                            alt=""
                            placeholder="blurred"
                            layout="fixed"
                            width={95}
                            style={{
                                margin: "20px",
                            }}
                        />
                    </div>
                    <div className="tagsWrapper">
                        <span>+</span>
                        <div className="tag">NodeJS</div>
                        <div className="tag">Bootstrap</div>
                        <div className="tag">Material UI</div>
                        <div className="tag">Sass</div>
                        <div className="tag">Figma</div>
                        <div className="tag">Photoshop</div>
                        <div className="tag">Illustrator</div>
                        <div className="tag">InDesign</div>
                    </div>
                </div>
            </Container>
        </StyledSkillsSection>
    );
};

export default Skills;
