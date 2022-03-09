import React from "react";
import { Container } from "../components/styles/Container.styled";
import { StyledProjectsSection } from "./styles/Projects.styled";
import Card from "./Card";

const Projects = () => {
    return (
        <StyledProjectsSection>
            <Container className="projectsWrapper" id="projectsContainer">
                <h1 className="projectsTitulo">/ Projetos</h1>
                <div className="cardsWrapper">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="projectsBtnWrapper">
                    <button className="primary-btn projects-btn">
                        Portfolio de Design Gráfico
                    </button>
                </div>
            </Container>
        </StyledProjectsSection>
    );
};

export default Projects;
