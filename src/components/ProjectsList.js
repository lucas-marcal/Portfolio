import React from "react";
import DynamicCard from "./DynamicCard";
import { ProjectMarshallImg } from "./ProjectMarshallImg";

const ProjectsList = ({ content = [] }) => {
    return (
        <div className="cardsWrapper">
            {content.map((item) => {
                const {
                    externalLink,
                    gitHub,
                    id,
                    projectDescription,
                    projectImage,
                    projectTags,
                    projectTitle,
                } = item;
                console.log(projectTitle);
                return (
                    <DynamicCard
                        key={id}
                        projectImg={<ProjectMarshallImg />}
                        projectTitle={projectTitle}
                        projectDescription={projectDescription}
                        gitHubLink={gitHub}
                        externalLink={externalLink}
                        projectTags={
                            <>
                                <h5>React</h5>
                                <h5>Redux</h5>
                                <h5>Material UI</h5>
                                <h5>Fetch API</h5>
                            </>
                        }
                    />
                );
            })}
        </div>
    );
};

export default ProjectsList;
