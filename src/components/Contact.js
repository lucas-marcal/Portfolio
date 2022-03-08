import React from "react";
import { StyledContact } from "./styles/Contact.styled";
import { Container } from "./styles/Container.styled";

const Contact = () => {
    return (
        <StyledContact>
            <Container className="contactWrapper">
                <h1 className="contactTitle">/ Contato</h1>
                <p>
                    Vamos conversar? Você podeusar o formulário abaixo ou enviar
                    um email diretamente para contato@lucasm.io.
                </p>
                {/* <form>
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
                </form> */}
            </Container>
        </StyledContact>
    );
};

export default Contact;
