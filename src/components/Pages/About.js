import React from "react";
import whoAmI from "../../assets/images/about-img/aboutimg.jpg";

function About () {


    return (
        <section className="about-me">
            <div>
                <h2 className="section-title">It's Millertime!</h2>
            </div>
            <img id="aboutimg" src={whoAmI} alt="On a boat with the American Flag and sunset behind me."/>
            <p className="aboutText">Hello, and thanks for stopping by! My name is Mark Miller and I currently reside in Charlotte, NC with my fiance Katie and our cat Tubs. If im not watching our latest TV show binge, you can find me out hiking, enjoying the local breweries, diving in to my latest book series, or playing video games! </p>
            <p className="aboutText">After a couple of years in a career field that was leaving me unsatisfied, I decided that I needed to make a change. After a couple months dabbling with web development, I decided to pull the trigger and enroll into the full stack web development bootcamp at UNC-Charlotte. Completing the course was far from easy, but I am so glad I took the dive as the bootcamp really helped my incipient interest in coding burgeon into a full blown passion. </p>
            <p className="aboutText">In my time throughout the bootcamp, I have come to discover that the aspect of coding I love the most is the ability it gives me to flex my problem solving skills. Having a goal that needs to be reached and a near unlimited ways of achieving that goal is what drives me to write functional and clean code. It is this skillset that leaves me confident that I would be a great fit in both front-end and back-end development! </p>
        </section>
    );
}

export default About;