import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "../components/header";
import gfm from "remark-gfm";

const changelogs = `
# Changelogs
- this is for testing purposes
- try to delocalize this markdown
`;

export const About = () => {
    return (
        <div className="about-page">
            <Header title="About LTTKGP" />
            <p>
                Listen To This KGP (LTTKGP) is a music streaming platform that brings together people using the songs that recommend on our
                Facebook page. This is was a join effort by few students on IIT KGP, but the developer base is consistently getting larger due 
                to the this being an Open Source platform.
            </p>

            <h2>Features of LTTKGP</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magnam. Minima, molestiae amet similique mollitia porro expedita officia delectus eligendi magnam placeat, earum accusantium veritatis nobis voluptate tempore omnis quas unde saepe excepturi. Vel autem dolore expedita! Porro tempore, inventore veniam distinctio laboriosam animi a odit sint repellat, voluptatem pariatur.</p>

            <h2>Let's improve this together</h2>
            <p>
                Let us know what you think by talking to us directly through our <a href="#" target="_blank" rel="noreferrer">Slack workspace</a>. 
                You can also see how all of this comes together and works at the programming level by taking a look at our <a href="#" target="_blank" rel="noreferrer">Github repositories</a>.
            </p>
            
            <ReactMarkdown plugins={[gfm]} children={changelogs} />
        </div>
    );
}