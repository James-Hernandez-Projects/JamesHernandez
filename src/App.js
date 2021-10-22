import React, {Component, Fragment} from 'react'
import HeroBanner from './components/HeroBanner/HeroBanner.component';
import Experience from './components/Experience/Experience.component';
import About from './components/About/About.component';
import Links from './components/Links/Links.component';
import James from './assets/images/IMG_4308 copy.JPG'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: "James Hernadez",
      theme: "Light"
    };
  }

  render(){
    return (
      <Fragment>
        <HeroBanner />
        <About />
        <Experience />
        <Links />
      </Fragment>
    );
  }

}

export default App;
