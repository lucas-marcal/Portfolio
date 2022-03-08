import React from "react";
import { ProfilePic } from "./ProfilePic";
import { Container } from "./styles/Container.styled";
import { StyledFeatured } from "./styles/Featured.styled";

const Featured = () => {
    return (
        <StyledFeatured>
            <Container className="featuredWrapper">
                <ProfilePic />

                <div className="content">
                    <h5>Olá! Eu sou o</h5>
                    <h1>Lucas Marçal</h1>
                    <p>
                        Um designer com mais de 10 anos de experiência
                        mergulhando profundamente no mundo da{" "}
                        <span>tecnologia</span>.
                    </p>
                    <button className="primary-btn">
                        Me mostre os trabalhos!
                    </button>
                </div>
            </Container>
        </StyledFeatured>
    );
};

export default Featured;
