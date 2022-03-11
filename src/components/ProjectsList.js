import React from "react";
import DynamicCard from "./DynamicCard";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
                const image = getImage(projectImage);
                console.log(projectTags);
                return (
                    <DynamicCard
                        key={id}
                        projectImg={
                            <GatsbyImage
                                image={image}
                                alt={projectTitle}
                                imgStyle={{ borderRadius: "8px" }}
                                style={{ marginBottom: "18px" }}
                            />
                        }
                        projectTitle={projectTitle}
                        projectDescription={projectDescription}
                        gitHubLink={gitHub}
                        externalLink={externalLink}
                        projectTags={
                            <>
                                {projectTags.map((tag, index) => {
                                    return <h5 key={index}>{tag}</h5>;
                                })}
                            </>
                        }
                    />
                );
            })}
        </div>
    );
};

export default ProjectsList;
