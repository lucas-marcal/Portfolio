import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function LmLogo() {
    return (
        <StaticImage
            src="../images/LM-logo.svg"
            alt="Lucas Marçal Logo"
            placeholder="blurred"
            layout="fixed"
            height={50}
        />
    );
}
