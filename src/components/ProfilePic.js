import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ProfilePic() {
    return (
        <StaticImage
            src="../images/profilebg.png"
            alt="Lucas Marçal profile picture"
            placeholder="blurred"
            layout="constrained"
            transformOptions={{ greyscale: true }}
        />
    );
}
