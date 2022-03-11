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
                        <p className="aboutSubTitleWrapper">
                            <span className="aboutSubTitle">
                                Programador, designer, empreendedor.
                            </span>
                        </p>
                        <p>
                            <span
                                style={{ fontWeight: 500, fontStyle: "italic" }}
                            >
                                Programar soluções eficazes, eficientes e
                                visualmente impactantes: essa é a missão que
                                tenho atualmente.
                            </span>
                        </p>
                        <p>
                            Mas nem sempre foi assim: ao longo dos anos como
                            designer gráfico freelancer, já participei da
                            fundação e gestão de empresas de produção
                            audiovisual, impressão 3D e projetos de engenharia,
                            ensaio e gravação musical e atualmente tenho a minha
                            própria marca de molhos de pimenta.
                        </p>
                        <p>
                            Começando tantos projetos do zero e considerando os
                            desafios diários que vêm junto dessa decisão, acho
                            que posso me considerar um solucionador de problemas
                            por vocação. Qual será o próximo?
                        </p>
                    </div>
                </div>
            </Container>
        </StyledAbout>
    );
};

export default About;
