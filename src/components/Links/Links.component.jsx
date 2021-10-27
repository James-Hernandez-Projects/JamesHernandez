import React from 'react'

const Links = () => {
    return (
        <div className="link-container">
            <div className="bio-links">
                <a href="www.linkedin.com/in/james-hernandez-1ab831204" className="button-appearence" style={{backgroundColor:'#3DB2FF'}}
                target='_blank'>
                Linkedin
                </a>
                <a href="https://github.com/James-Hernandez-Projects" className="button-appearence" style={{backgroundColor:'#FFB830'}}
                target='_blank'>
                Github
                </a>
                <a href="mailto:happjnh@gmail.com" className="button-appearence" style={{backgroundColor:'#FF2442'}}>
                Email
                </a>
                <a href="https://james-hernandez-projects.github.io/resume/" className="button-appearence" style={{backgroundColor:'#79D70F'}}
                target='_blank'>
                Resume
                </a>
            </div>
        </div>
        
    );
};

export default Links
