import React, { useState } from "react";
import styled from "styled-components";

const StyledHamburger = styled.button`
    width: 4rem;
    height: 3rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    background: none;
    border: none;

    div {
        width: 2.5rem;
        height: 0.1rem;
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 20px;

        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    @media (min-width: 750px) {
        display: none;
    }
`;

const Hamburger = ({ open }) => {
    const [extendNavbar, setExtendNavbar] = useState(false);
    return (
        <StyledHamburger>
            <button onClick={() => console.log(open)}>TESTE</button>
            <div />
            <div />
            <div />
        </StyledHamburger>
    );
};

export default Hamburger;
