import React from "react";

import "./Home.css";
import logo from "../../assets/images/logo_transparent.png";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="main-page" style={{ marginBottom: "5em" }}>
      <div className="section-a">
        <div className="container">
          <div className="container-main">
            <img className="logo_image" src={logo} alt="img" />
            <h1>Xtreme UI</h1>
            <span>
              Xtreme UI is a simple component library which helps you to build
              your application faster.
            </span>
            <Link
              className="btn btn_primary getstarted-button"
              style={{ color: "white", textDecoration: "none" }}
              to="/documentation"
            >
              Get Started
            </Link>{" "}
          </div>
          <div>
            <h2>Less code. More speed.</h2>
            <span>
              Spend less time writing UI code and more time building a great
              experience for your customers
            </span>
          </div>
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="footer">
        <div className="footer_main">
          <span className="footer_text">Designed and Developed by Dhruv</span>
        </div>
        <div className="footer_icons">
          <a href="https://github.com/DhruvA99">
            <i class="fa fa-github fa-2x"></i>
          </a>
          <a href="https://twitter.com/DhruvAr74239368">
            <i class="fa fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
