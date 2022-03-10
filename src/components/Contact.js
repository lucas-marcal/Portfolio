import React from "react";
import ContactForm from "./ContactForm";
import { StyledContact } from "./styles/Contact.styled";
import { Container } from "./styles/Container.styled";

const Contact = () => {
    return (
        <StyledContact>
            <Container className="contactWrapper" id="contactContainer">
                <h1 className="contactTitle">/ Contato</h1>
                <p className="contactTxt">
                    Vamos conversar? Você pode usar o formulário abaixo ou
                    enviar um email diretamente para contato@lucasm.io.
                </p>

                <ContactForm />
            </Container>
        </StyledContact>
    );
};

export default Contact;
