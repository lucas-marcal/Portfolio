import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ProjectMarshallImg() {
    return (
        <StaticImage
            src="../images/projectMarshall.png"
            alt="Marshall Project Screenshot"
            placeholder="blurred"
            imgStyle={{ borderRadius: "8px" }}
            style={{ marginBottom: "18px" }}
        />
    );
}
