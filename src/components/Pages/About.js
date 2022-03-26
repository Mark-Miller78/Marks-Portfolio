import React from "react";
import whoAmI from "../../assets/images/about-img/Who-am-I.jpg";
import whereIveBeen from "../../assets/images/about-img/where-have-i-been.jpg";
import whereImGoing from "../../assets/images/about-img/where.im.going.jpg";

function About () {


    return (
        <section className="about-me">
            <div>
                <h2 className="section-title">Get to Know Me!</h2>
            </div>
            <div className="about-me-cards">

                <div className="my-info">
                    <img src={whoAmI} alt="On a boat with the American Flag and sunset behind me."/>
                    <article className="info-text">
                        <h3>Who Am I?</h3>
                        <br></br>
                        <p>Hello, World! Please allow me to introduce myself. My name is Mark Miller and I am currently enrolled in the coding bootcamp at the University of North Carolina-Charlotte. Starting this journey in my life has me very excited to see who I will grow to become and the acomplishments I will be able to achieve! I currently reside in Charlotte and live with my fiance Kaitlyn and our cat Tubs! My hobbies include finding new places to try in Charlotte, hiking, video games, and rooting on my Clemson Tigers! </p>
                    </article>
                </div>

                <div className="my-info">
                    <img src={whereIveBeen} alt="Holding diploma in front of tiger paw"/>
                    <article className="info-text">
                        <h3>Where Have I been?</h3>
                        <br></br>
                        <p> Growing up in Sumter, SC, I decided to attend Clemson University in 2012. Deciding to major in Animal Sciences, I worked as a veterinarian assistant until I graduated in 2016. From their I moved to Durham, NC where I worked at Duke University as a research animal technician. In 2019, I accepted a job with the Department of Agriculture and Consumer Services as a Medical Lab Tech and moved to Charlotte, NC. Recently, I have come to the realization that my current career path is not going to allow me reach the potential that I am confident I can reach. This realization lead me on the path to discovering web development. After learning some of the basics of web development, I enrolled in UNCC's coding bootcamp in October of 2021.</p>
                    </article>
                </div>

                <div className="my-info">
                    <img src={whereImGoing} alt="Standing a top a mountain overlooking a valley below."/>
                    <article className="info-text">
                        <h3>Where Am I Going?</h3>
                        <br></br>
                        <p>I am very excited to begin my web development career with UNCC! My knowledge of coding may still be in its incipient form, but I am very excited to see what I will be able to achieve in the near future! I am very interested in working on the back end side of things, as well as helping small business get their online web pages up and running. Once I have a baseline knowledge after the bootcamp, I am very interested in dabbling into making my own VR video game/experience! </p>
                    </article>
                </div>

            </div>
        </section>
    );
}

export default About;