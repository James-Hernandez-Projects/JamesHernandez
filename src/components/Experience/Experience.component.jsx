import React from 'react'
import SFimage from '../../assets/images/SimulatorSF20.14.09.png'
import Lonimage from '../../assets/images/SimulatorLondon.png'
import Ausimage from '../../assets/images/SimulatorAus.png'
import CrownClothing from '../../assets/images/CrwnClth.png'
import Latch from '../../assets/images/Latch.png'
import TierRank from '../../assets/images/TierRank.png'

const Experience = () => {
    return (
        <div>
            <div className="experience-title">
                <h2>Some of my work <i className='far fa-file-code'></i></h2>
            </div>
            <div className="clima-work">
                <div className="clima-image-container">
                    <div className="image-container-clima">
                        <img src={SFimage} alt="SFimage" />
                    </div>
                    <div className="image-container-clima">
                        <img src={Lonimage} alt="Lonimage" />
                    </div>
                    <div className="image-container-clima">
                        <img src={Ausimage} alt="Ausimage" />
                    </div>
                </div>
                <div className="clima-description">
                    <div className="clima-title">
                        <div className="title-clima">Clima Weather App</div>
                        <div className="type-of-app">-PERSONAL MOBILE APP</div>
                        <div className="clima-description-text">
                            App to check current weather for current location based on iPhone GPS data and manual 
                            search function. Built using latest apple design practices; MVC design pattern and protocol 
                            delegate design pattern. With
                            <span style={{fontWeight:'bold'}}> Dark and Light</span> mode functionality that corresponds 
                            to iPhone set prefence
                        </div>
                        <div className="clima-languages">
                            <div className="language" style={{backgroundColor:'#000000',color:'#ffffff',fontWeight:'bold'}}>iOS</div>
                            <div className="language" style={{backgroundColor:'#150050',color:'#ffffff',fontWeight:'bold'}}>Swift 5</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clima-work">
                <div className="latch-image-container">
                    <div className="image-container-latch">
                        <img src={Latch} alt="Ausimage" />
                    </div>
                </div>
                <div className="clima-description">
                    <div className="clima-title">
                        <div className="title-clima">Latch</div>
                        <div className="type-of-app">-PERSONAL WEB APP</div>
                        <div className="clima-description-text">
                            LATCH is a social media platform aimed towards people who are in the pursuit or already 
                            pursuing a career in any STEM field. This application will allow users to document various types of information about themselves 
                            such as experience, past projects, major, qualifications, etc.
                        </div>
                        <div className="clima-languages">
                            <div className="language" style={{backgroundColor:'#51050F',color:'#ffffff',fontWeight:'bold'}}>MERN</div>
                            <div className="language" style={{backgroundColor:'#334756',color:'#ffffff',fontWeight:'bold'}}>express</div>
                            <div className="language" style={{backgroundColor:'#1597E5',color:'#ffffff',fontWeight:'bold'}}>React.js</div>
                            <div className="language" style={{backgroundColor:'#1E5128',color:'#ffffff',fontWeight:'bold'}}>monogo</div>
                            <div className="language" style={{backgroundColor:'#4E9F3D',color:'#ffffff',fontWeight:'bold'}}>Node.js</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clima-work">
                <div className="latch-image-container">
                    <div className="image-container-latch">
                        <img src={CrownClothing} alt="Ausimage" />
                    </div>
                </div>
                <div className="clima-description">
                    <div className="clima-title">
                        <div className="title-clima">Crown-Clothing</div>
                        <div className="type-of-app">-PERSONAL WEB APP</div>
                        <div className="clima-description-text">
                            Crown-Clothing is a made up clothing store that is made using a MERN style 
                            architecture using the modern react.js practices and principles completed with a StripeAPI for user transacitons.
                            All data is stored in a FireBase data storage in a NoSQL design arrangement. Users can create an account in two different
                            ways, either by manually inputing their data or by signing in with their google account by using a One-Click button. 
                        </div>
                        <div className="clima-languages">
                            <div className="language" style={{backgroundColor:'#51050F',color:'#ffffff',fontWeight:'bold'}}>MERN</div>
                            <div className="language" style={{backgroundColor:'#334756',color:'#ffffff',fontWeight:'bold'}}>express</div>
                            <div className="language" style={{backgroundColor:'#1597E5',color:'#ffffff',fontWeight:'bold'}}>React.js</div>
                            <div className="language" style={{backgroundColor:'#F78812',color:'#ffffff',fontWeight:'bold'}}>FireBase</div>
                            <div className="language" style={{backgroundColor:'#AAA492',color:'#ffffff',fontWeight:'bold'}}>Redux</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clima-work">
                <div className="latch-image-container">
                    <div className="image-container-latch">
                        <img src={TierRank} alt="Ausimage" />
                    </div>
                </div>
                <div className="clima-description">
                    <div className="clima-title">
                        <div className="title-clima">TierRank</div>
                        <div className="type-of-app">-PERSONAL WEB APP</div>
                        <div className="clima-description-text">
                            To serve the purpose of people seeing honest opinions with a ranking system for topics of their interest made by
                            users who share the same interests. A site dedicated towards ranking events, shows, literature, games, anime, etc.
                            Made with a MERN architecture with mongoDB being used for the DataBase.
                        </div>
                        <div className="clima-languages">
                            <div className="language" style={{backgroundColor:'#51050F',color:'#ffffff',fontWeight:'bold'}}>MERN</div>
                            <div className="language" style={{backgroundColor:'#334756',color:'#ffffff',fontWeight:'bold'}}>express</div>
                            <div className="language" style={{backgroundColor:'#1597E5',color:'#ffffff',fontWeight:'bold'}}>React.js</div>
                            <div className="language" style={{backgroundColor:'#1E5128',color:'#ffffff',fontWeight:'bold'}}>monoDB</div>
                            <div className="language" style={{backgroundColor:'#4E9F3D',color:'#ffffff',fontWeight:'bold'}}>Node.js</div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        
    )
}

export default Experience
