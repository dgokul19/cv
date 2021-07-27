import React from "react";
import Typewriter from "typewriter-effect";

function TypeComponent() {
    return (
        <Typewriter
            options={{
                strings: [
                  "Software Engineer...",
                  "MERN Stack Developer...",
                  "Chess Enthusiast..."
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default TypeComponent;