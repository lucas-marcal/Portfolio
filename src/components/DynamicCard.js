import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { StyledCard } from "./styles/Card.styled";
import { ProjectMarshallImg } from "./ProjectMarshallImg";

const DynamicCard = () => {
    return (
        <StyledCard>
            <div className="cardContentWrapper">
                <div className="cardMainContent">
                    <div>
                        <ProjectMarshallImg />
                    </div>
                    <div>
                        <h3>Ecommerce Camisetas</h3>
                        <p>
                            Desenvolvido como projeto de conclusão do Bootcamp
                            Frontend Inter da DIO.
                        </p>
                    </div>
                </div>
                <div className="cardFooter">
                    <div className="divIcons">
                        <a href="https://">
                            <FaGithub />
                        </a>
                        <a href="https://">
                            <FiExternalLink />
                        </a>
                    </div>
                    <div className="projectsTags">
                        <h5>React</h5>
                        <h5>Redux</h5>
                        <h5>Material UI</h5>
                        <h5>Fetch API</h5>
                    </div>
                </div>
            </div>
        </StyledCard>
    );
};

export default DynamicCard;
