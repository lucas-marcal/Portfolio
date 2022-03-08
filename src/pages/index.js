import * as React from "react";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
import Featured from "../components/Featured";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const theme = {
    colors: {
        primary: "#37FF87",
        secondary: "#52FF6B",
        primaryGradient:
            "linear-gradient(135deg, rgba(144,255,105,1) 0%, rgba(55,255,135,1) 100%)",
        darkbg: "#313131",
        darkerbg: "#282828",
    },
};

const IndexPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navbar />
            <Featured />
            <Projects />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </ThemeProvider>
    );
};

export default IndexPage;
