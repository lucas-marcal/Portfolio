import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { StyledCard } from "./styles/Card.styled";

const DynamicCard = ({
    projectImg,
    projectTitle,
    projectDescription,
    gitHubLink,
    externalLink,
    projectTags,
}) => {
    return (
        <StyledCard>
            <div className="cardContentWrapper">
                <div className="cardMainContent">
                    <div>{projectImg}</div>
                    <div>
                        <h3>{projectTitle}</h3>
                        <p>{projectDescription}</p>
                    </div>
                </div>
                <div className="cardFooter">
                    <div className="divIcons">
                        <a href={gitHubLink}>
                            <FaGithub />
                        </a>
                        <a href={externalLink}>
                            <FiExternalLink />
                        </a>
                    </div>
                    <div className="projectsTags">{projectTags}</div>
                </div>
            </div>
        </StyledCard>
    );
};

export default DynamicCard;
