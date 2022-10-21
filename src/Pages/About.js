import React from "react";
import AboutInfo from "../components/aboutInfo";
import GithubStats from "../components/githubStats";


function About () {


    return (
        <section className="about-me">
           <AboutInfo />
           <GithubStats />
        </section>
    );
}

export default About;