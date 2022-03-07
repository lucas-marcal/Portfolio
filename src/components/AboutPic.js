import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function AboutPic() {
    return (
        <StaticImage
            src="../images/aboutPic.png"
            alt=""
            placeholder="blurred"
            layout="constrained"
        />
    );
}
