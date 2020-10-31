import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
//   renderPage = () => {
//     switch(this.state.currentPage) {
//     case: "Home"
//     return <Home/>
//     default: <Contact />
//   }
// }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <About />
        <Blog />
        <Home />
        <About />
        Based on `this.state.currentPage`, render the appropriate component
        here.
      </div>
    );
  }
}

export default PortfolioContainer;


// Render the `About` component when `this.state.currentPage === "About"`
  
//   * Render the `Blog` component when `this.state.currentPage === "Blog"`

//   * Render the `Contact` component when `this.state.currentPage === "Contact"`

//   * Render the `Home` component when `this.state.currentPage === "Home"`