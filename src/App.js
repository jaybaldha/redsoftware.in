import React, { Component } from "react";
import logo from "./img/red-logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <img className="logo" src={logo} alt="Red Software Logo" />
        <div className="desc">— the f00 company —</div>
        <div className="links-wrapper">
          <div className="links">
            <a
              href="https://github.com/redsoftware-hq"
              className="icon github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://twitter.com/redsoftwarein"
              className="icon twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.facebook.com/redsoftwarein"
              className="icon facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              href="http://blog.redsoftware.in"
              className="icon blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-rss-square" />
            </a>
          </div>
          {/* <div className="links">
            <a
              href="https://twitter.com/fooburr"
              className="photo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://pbs.twimg.com/profile_images/948574826725363713/EFJvLYCL_400x400.jpg"
                alt="Ronak Baldha"
              />
            </a>
            <a href="twitter.com" className="icon twitter" target="_blank">
              <i className="fa fa-twitter" />
            </a>
            <a href="twitter.com" className="icon twitter" target="_blank">
              <i className="fa fa-twitter" />
            </a>
            <a href="twitter.com" className="icon twitter" target="_blank">
              <i className="fa fa-twitter" />
            </a>
          </div> */}
          {/* <div className="links">
            <label>TEAM</label>
            <a className="text" href="google.com" target="_blank">
              @fooburr
            </a>
            <a className="text" href="google.com" target="_blank">
              @3sanket3
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
