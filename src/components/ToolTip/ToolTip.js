import React from "react";
import classes from "./ToolTip.module.css";

const ToolTip = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container_main}>
        <div className={classes.container_main_description}>
          <span className={classes.main_heading}>ToolTip</span>
          <p>
            A tooltip is often used to specify extra information about something
            when the user moves the mouse pointer over an element:
          </p>
        </div>
        <div className={classes.usage}>
          <span className={classes.secondary_heading}>Usage</span>
          <span className={classes.tertiery_heading}>Examples</span>

          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <button
                className={`${classes.btn} ${classes.btn_primary} ${classes.toolTip}`}
              >
                ToolTip Top
                <span className={classes.toolTipText_top}>help text</span>
              </button>
              <button
                className={`${classes.btn} ${classes.btn_primary} ${classes.toolTip}`}
              >
                ToolTip Bottom
                <span className={classes.toolTipText_bottom}>help text</span>
              </button>
              <button
                className={`${classes.btn} ${classes.btn_primary} ${classes.toolTip}`}
              >
                ToolTip Right
                <span className={classes.toolTipText_right}>help text</span>
              </button>
              <button
                className={`${classes.btn} ${classes.btn_primary} ${classes.toolTip}`}
              >
                ToolTip Left
                <span className={classes.toolTipText_left}>help text</span>
              </button>
            </div>
            <br />
            <span className={classes.codeHeading}>Code:</span>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn_primary%2520toolTip%2522%253E%250A%2520%2520%2520%2520ToolTip%2520Top%250A%2520%2520%2520%2520%253Cspan%2520className%253Dclass%253D%2522toolTipText_top%2522%253Ehelp%2520text%253C%252Fspan%253E%250A%253C%252F%2520button%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn_primary%2520toolTip%2522%253E%250A%2520%2520%2520%2520ToolTip%2520Bottom%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522toolTipText_bottom%2522%253Ehelp%2520text%253C%252Fspan%253E%250A%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn_primary%2520toolTip%2522%253E%250A%2520%2520%2520%2520ToolTip%2520Right%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522toolTipText_right%2522%253Ehelp%2520text%253C%252Fspan%253E%250A%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn_primary%2520toolTip%2522%253E%250A%2520%2520%2520%2520ToolTip%2520Left%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522toolTipText_left%2522%253Ehelp%2520text%253C%252Fspan%253E%250A%253C%252Fbutton%253E"
              style={{
                height: "100%",
                minHeight: "500px",
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

export default ToolTip;
// &lt;div class="alert alert-normal"&gt;
//   &lt;span&gt;This is a normal alert message---Check this out!&lt;/span&gt;
// &lt;/div&gt;
