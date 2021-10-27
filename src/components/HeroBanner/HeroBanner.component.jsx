import React, {Fragment} from 'react'
import James from '../../assets/images/IMG_4308 copy.JPG'

const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <div className="left-side-banner">
                <div className="hi-friend">
                    Hi Friend! <i className="far fa-smile fa-xs smiles-icon"></i>
                </div>
                <div className="name-intro">
                    <p className="name-james">James N. Hernandez -</p>
                    <p className="name-about">I create Web and Mobile apps for you and me.</p>
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
                    <div className="disclaimer">
                        * If my resume does not load the first time, reload the page <i className="far fa-thumbs-up smiles-icon"></i>
                    </div>
                </div>
            </div>
            <div className="right-side-banner">
                <div className="image-container">
                    <img className="profile-pic" src={James} alt="James Picture" />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner