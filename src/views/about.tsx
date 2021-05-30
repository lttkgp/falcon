import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Header from "../components/header";
import gfm from "remark-gfm";

export const About = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    async function getText() {
      const markdown = await fetch("/aboutPage.md");
      const text = await markdown.text();

      setText(text);
    }
    getText();
  }, []);

  return (
    <div className="about-page">
      <Header title="About LTTKGP" />
      <ReactMarkdown plugins={[gfm]} children={text} />
    </div>
  );
};
