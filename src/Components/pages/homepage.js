import React, { Component } from 'react';

// components
import Header from './../headerComponent/header';
import MainPage from './../mainPageComponent/mainPage';
import Purpose from './../purposeComponent/purpose';
import Features from './../featuresComponent/features';
import Services from './../servicesComponent/services';
import Contact from './../contactComponent/contact';

// includes
import './../../Assets/css/homepage.min.css';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <div className="content">
        <MainPage />
        <Purpose />
        <Features />
        <Services />
        <Contact />
        </div>
      </div>
    );
  }
}

export default Homepage;
