import React from "react";
import GitHubCalendar from "react-github-calendar";

function GithubStats () {

    const theme ={
        level1: '#7C8981'
    };

    return(
        <div>
            <div className="section-title">
                Some Fun Stats!
            </div>
            <div className="githubStats container">
                <div className="row">
                    <img className="col-md-6 col-sm-12" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mark-miller78&layout=compact" alt="most used languages"/>
                    <img className="col-md-6 col-sm-12 mt-sm-2" src="https://github-readme-stats.vercel.app/api?username=mark-miller78&show_icons=true&theme=rose_pine" alt="github stats"/>
                    <div className="col-12 mt-3 d-flex justify-content-center">
                        <GitHubCalendar 
                            username="mark-miller78"
                            blockRadius={3}
                            blockSize={15}
                            blockMargin={5}
                            fontSize={16}
                            hideColorLegend={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GithubStats;