import React from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container_main}>
        <div className={classes.container_main_description}>
          <span className={classes.main_heading}>NavBar</span>
          <p>
            A powerful, responsive navigation header, the navbar. Includes
            support for branding, navigation, and more
          </p>
        </div>
        <div className={classes.usage}>
          <span className={classes.secondary_heading}>Usage</span>
          <span className={classes.tertiery_heading}>Example 1</span>
          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <div className={classes.navigation_main}>
                <div className={classes.navigation_left_side}>
                  <div className={classes.navigation_Hamburger_Icon}>
                    <div
                      className={classes.navigation_Hamburger_Icon_item}
                    ></div>
                    <div
                      className={classes.navigation_Hamburger_Icon_item}
                    ></div>
                    <div
                      className={classes.navigation_Hamburger_Icon_item}
                    ></div>
                  </div>
                  <div className={classes.navigation_logo}>
                    <h3>Logo</h3>
                  </div>
                </div>

                <div className={classes.navigation_content}>
                  <span className={classes.navigation_content_item}>
                    Component1
                  </span>
                  <span className={classes.navigation_content_item}>
                    Component2
                  </span>
                  <span className={classes.navigation_content_item}>
                    Component3
                  </span>
                  <i className="fa fa-shopping-cart fa-1x"></i>
                </div>
              </div>
            </div>
            <br />
            <span className={classes.codeHeading}>Code:</span>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.97%29&t=night-owl&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=49px&ln=false&fl=1&fm=Space+Mono&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522navigation_main%2522%253E%250A%2520%2520%253Cdiv%2520class%253D%2522navigation_left_side%2522%253E%250A%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522navigation_Hamburger_Icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522navigation_Hamburger_Icon_item%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522navigation_Hamburger_Icon_item%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522navigation_Hamburger_Icon_item%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522navigation_logo%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253ELogo%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522navigation_content%2522%253E%250A%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522navigation_content_item%2522%253EComponent1%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522navigation_content_item%2522%253EComponent2%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522navigation_content_item%2522%253EComponent3%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522navigation_right_side%2522%253E%250A%2520%2520%2520%2520%2520%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%253C%252Fdiv%253E"
              style={{
                height: "100%",
                minHeight: "700px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
// &lt;div class="alert alert-normal"&gt;
//   &lt;span&gt;This is a normal alert message---Check this out!&lt;/span&gt;
// &lt;/div&gt;
