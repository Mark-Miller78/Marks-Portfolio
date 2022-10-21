import React from "react";
import whoAmI from "../assets/images/about-img/aboutimg.jpg";

function AboutInfo () {

    return (
        <div>
            <div>
                <h2 className="section-title">It's Millertime!</h2>
            </div>
            <div className="about-container container">
                <div className="about-info row">
                    <div className="about-img col-lg-4 col-md-12 text-center">
                        <img id="aboutimg" src={whoAmI} alt="On a boat with the American Flag and sunset behind me."/>
                    </div>
                    <div className="about-text col-lg-8 col-md-12">
                        <p className="aboutText">Hello, and thanks for stopping by! My name is Mark Miller and I currently reside in Charlotte, NC with my fiance Katie and our cat Tubs. If im not watching our latest TV show binge, you can find me out hiking, enjoying the local breweries, diving in to my latest book series, or playing video games! </p>
                        <p className="aboutText">What I love about coding the most is the ability it gives me to flex my problem solving skills. Having a goal that needs to be reached and a near unlimited ways of achieving that goal is what drives me to write functional and clean code. It is this skillset that leaves me confident that I would be a great fit in both front-end and back-end development! </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo;