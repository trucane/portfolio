import React from "react";


import TopBar from './Menu/TopBar';
import Footer from './Menu/Footer';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
       <TopBar />
       <Footer />

      </div>
    );
  }
}

export default Home;
