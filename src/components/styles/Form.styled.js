import styled from "styled-components";

export const StyledForm = styled.div`
    text-align: right;

    button {
        margin-right: 10px;
        margin-top: 10px;
    }

    input:focus ~ label,
    textarea:focus ~ label,
    input:valid ~ label,
    textarea:valid ~ label {
        font-size: 0.75em;
        color: ${({ theme }) => theme.colors.primary};
        top: -5px;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
    }

    textarea:focus,
    input:focus {
        outline: 1px solid ${({ theme }) => theme.colors.primary};
    }

    .styledInput {
        position: relative;
        width: 100%;
        margin: 10px;
        label {
            color: ${({ theme }) => theme.colors.primary};
            padding: 1.3rem 20px 1rem 20px;
            position: absolute;
            top: 10px;
            left: 0;
            -webkit-transition: all 0.25s ease;
            transition: all 0.25s ease;
            pointer-events: none;
        }
    }

    .formRow {
        display: flex;
        flex-wrap: wrap;
    }

    input,
    textarea {
        padding: 40px 20px 20px 20px;
        border: none;
        width: 100%;
        font-size: 1rem;
        background-color: #2d2d2d;
        color: white;
        border-radius: 6px;
        font-family: "Montserrat", sans-serif;
        transition: outline 1s ease;
    }

    textarea {
        width: 100%;
        height: 300px;
        resize: none;
    }

    .form-btn {
        @media (max-width: 600px) {
            width: 100%;
        }
    }
`;
