import React from "react";
import { Container } from "../components/styles/Container.styled";
import { StyledProjectsSection } from "./styles/Projects.styled";
import { graphql, useStaticQuery } from "gatsby";
import ProjectsList from "./ProjectsList";

const query = graphql`
    {
        allContentfulCard(sort: { fields: order }) {
            nodes {
                gitHub
                externalLink
                id
                projectDescription
                projectTags
                projectTitle
                projectImage {
                    gatsbyImageData(placeholder: BLURRED)
                }
                order
            }
        }
    }
`;

const Projects = () => {
    const data = useStaticQuery(query);
    const {
        allContentfulCard: { nodes },
    } = data;
    console.log(nodes);
    return (
        <StyledProjectsSection>
            <Container className="projectsWrapper" id="projectsContainer">
                <h1 className="projectsTitulo">/ Projetos</h1>

                <ProjectsList content={nodes} />

                <div className="projectsBtnWrapper">
                    <a
                        href="https://behance.net/lucasmarcal"
                        className="primary-btn projects-btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Portfolio de Design Gráfico
                    </a>
                </div>
            </Container>
        </StyledProjectsSection>
    );
};

export default Projects;
