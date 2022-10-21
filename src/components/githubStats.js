import React from "react";

function GithubStats () {

    return(
        <div>
            <div className="section-title">
                Some Fun Stats!
            </div>
            <div className="githubStats container">
                <div className="row">
                    <img className="col-md-6 col-sm-12" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mark-miller78&layout=compact" alt="most used languages"/>
                    <img className="col-md-6 col-sm-12" src="https://github-readme-stats.vercel.app/api?username=mark-miller78&show_icons=true&theme=rose_pine" alt="github stats"/>
                </div>
            </div>
        </div>
    )
}

export default GithubStats;