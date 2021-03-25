import React from "react";
import classes from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container_main}>
        <div className={classes.container_main_description}>
          <span className={classes.main_heading}>Button</span>
          <p>
            The Button component is used to trigger an action or event, such as
            submitting a form, opening a dialog, canceling an action, or
            performing a delete operation.
          </p>
        </div>
        <div className={classes.usage}>
          <span className={classes.secondary_heading}>Usage</span>
          <span className={classes.tertiery_heading}>Contained Buttons</span>
          <p>
            Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your
            app.
          </p>
          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <button className={`${classes.btn} ${classes.btn_primary}`}>
                Primary
              </button>
              <button className={`${classes.btn} ${classes.btn_secondary}`}>
                Secondary
              </button>
              <button className={`${classes.btn} ${classes.btn_default}`}>
                Default
              </button>
              <button
                className={`${classes.btn} ${classes.btn_disabled}`}
                disabled
              >
                Disabled
              </button>
              <a href="/" className={`${classes.btn} ${classes.btn_link}`}>
                Link
              </a>
            </div>
            <br />
            <span className={classes.codeHeading}>Code</span>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.97%29&t=seti&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=49px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn_primary%2522%2520%253E-%252F-%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn_secondary%2522%2520%253E-%252F-%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn_default%2522%2520%253E-%252F-%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn_disabled%2522%2520%253E-%252F-%253C%252Fbutton%253E%250A%253Ca%2520class%253D%2522btn%2520btn_link%2522%2520%253E-%252F-%253C%252Fa%253E"
              style={{
                height: "100%",
                minHeight: "400px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
          <br />
          <span className={classes.tertiery_heading}>Outlined Buttons</span>
          <p>
            Outlined buttons are medium-emphasis buttons. They contain actions
            that are important, but aren’t the primary action in an app.
            Outlined buttons are also a lower emphasis alternative to contained
            buttons, or a higher emphasis alternative to text buttons.
          </p>
          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <button
                className={`${classes.btn} ${classes.btn_primary_outline}`}
              >
                Primary
              </button>
              <button
                className={`${classes.btn} ${classes.btn_secondary_outline}`}
              >
                Secondary
              </button>
              <button
                className={`${classes.btn} ${classes.btn_default_outline}`}
              >
                Default
              </button>
              <button
                className={`${classes.btn} ${classes.btn_disabled_outline}`}
                disabled
              >
                Disabled
              </button>
              <a className={`${classes.btn} ${classes.btn_link}`}>Link</a>
            </div>
            <span>Code</span>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.97%29&t=seti&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=49px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn_primary_outline%2522%2520%253E-%252F-%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn_secondary_outline%2522%2520%253E-%252F-%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn_default_outline%2522%2520%253E-%252F-%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn_disabled_outline%2522%2520%253E-%252F-%253C%252Fbutton%253E%250A%253Ca%2520class%253D%2522btn%2520btn_link_outline%2522%2520%253E-%252F-%253C%252Fa%253E"
              style={{
                height: "100%",
                minHeight: "400px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
          <br />
          <span className={classes.tertiery_heading}>DropDown Buttons</span>
          <p>
            Dropdowns are toggleable, contextual overlays for displaying lists
            of links and more.These component toggle on hover over the button.
          </p>
          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <div className={classes.dropdown}>
                <button className={`${classes.btn} ${classes.btn_primary}`}>
                  Primary &#9660;
                </button>
                <div className={classes.dropdown_content}>
                  <a href="#">Link1</a>
                  <a href="#">Link2</a>
                  <a href="#">Link3</a>
                </div>
              </div>
              <div className={classes.dropdown}>
                <button className={`${classes.btn} ${classes.btn_secondary}`}>
                  Secondary &#9660;
                </button>
                <div className={classes.dropdown_content}>
                  <a href="#">Link1</a>
                  <a href="#">Link2</a>
                  <a href="#">Link3</a>
                </div>
              </div>
              <div className={classes.dropdown}>
                <button className={`${classes.btn} ${classes.btn_default}`}>
                  Default &#9660;
                </button>
                <div className={classes.dropdown_content}>
                  <a href="#">Link1</a>
                  <a href="#">Link2</a>
                  <a href="#">Link3</a>
                </div>
              </div>
            </div>
            <br />
            <span className={classes.codeHeading}>Code</span>

            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.97%29&t=seti&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=49px&ln=false&fl=1&fm=Space+Mono&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520class%253D%2522classes.dropdown%2522%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn_primary%2522%253E%250A%2520%2520%2520Default%2520%2526%25239660%253B%250A%2520%2520%253C%252Fbutton%253E%250A%2520%2520%253Cdiv%2520class%253D%2522dropdown_content%2522%253E%250A%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253ELink1%253C%252Fa%253E%250A%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253ELink2%253C%252Fa%253E%250A%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253ELink3%253C%252Fa%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%250A%2520%253Cdiv%2520class%253D%2522classes.dropdown%2522%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn_secondary%2522%253E%250A%2520%2520%2520Default%2520%2526%25239660%253B%250A%2520%2520%253C%252Fbutton%253E%250A%2520%2520%253Cdiv%2520class%253D%2522dropdown_content%2522%253E%250A%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253ELink1%253C%252Fa%253E%250A%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253ELink2%253C%252Fa%253E%250A%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253ELink3%253C%252Fa%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%250A%2520%253Cdiv%2520class%253D%2522classes.dropdown%2522%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn_default%2522%253E%250A%2520%2520%2520Default%2520%2526%25239660%253B%250A%2520%2520%253C%252Fbutton%253E%250A%2520%2520%253Cdiv%2520class%253D%2522dropdown_content%2522%253E%250A%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253ELink1%253C%252Fa%253E%250A%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253ELink2%253C%252Fa%253E%250A%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253ELink3%253C%252Fa%253E%250A%2520%2520%253C%252Fdiv%253E"
              style={{
                height: "100%",
                minHeight: "900px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
