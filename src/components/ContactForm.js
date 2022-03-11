import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { StyledForm } from "./styles/Form.styled";
function ContactForm() {
    const [state, handleSubmit] = useForm("mwkybjep");
    if (state.succeeded) {
        return <p className="successTxt">Mensagem eviada com sucesso!</p>;
    }
    return (
        <StyledForm>
            <form onSubmit={handleSubmit}>
                <div className="formRow">
                    <div className="styledInput">
                        <input id="name" type="name" name="name" required />
                        <label htmlFor="name">Nome</label>
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className="styledInput">
                        <input id="email" type="email" name="email" required />
                        <label htmlFor="email">Email</label>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                </div>
                <div className="formRow">
                    <div className="styledInput">
                        <textarea id="message" name="message" required />
                        <label htmlFor="message">Mensagem</label>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="primary-btn form-btn"
                >
                    Enviar
                </button>
            </form>
        </StyledForm>
    );
}

export default ContactForm;
