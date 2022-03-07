import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
import Featured from "../components/Featured";
import Projects from "../components/Projects";

const theme = {
    colors: {
        primary: "#37FF87",
        secondary: "#52FF6B",
        primaryGradient:
            "linear-gradient(135deg, rgba(144,255,105,1) 0%, rgba(55,255,135,1) 100%)",
        darkbg: "#313131",
        darkerbg: "#282828",
    },
};

const IndexPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Navbar />
                <Featured />
                <Projects />
                <section>
                    <h1>Sobre</h1>
                    <div>Imagem</div>
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
                </section>
                <section>
                    <h1>Skills</h1>
                    <div>Badges de Skills</div>
                    <div>
                        <p>+</p>
                        <div>NodeJS</div>
                    </div>
                </section>
                <section>
                    <h1>Contato</h1>
                    <p>
                        Vamos conversar? Você podeusar o formulário abaixo ou
                        enviar um email diretamente para contato@lucasm.io.
                    </p>
                    <form>
                        <div className="form-row">
                            <label htmlFor="name">Nome:</label>
                            <input type="text" name="nome" id="nome"></input>
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email"></input>
                        </div>
                        <div className="form-row">
                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea name="mensagem" id="mensagem"></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
                <footer>
                    <div>
                        <FaGithub /> <FaLinkedin />
                    </div>
                    <div>Logo e Copyright</div>
                </footer>
            </>
        </ThemeProvider>
    );
};

export default IndexPage;
