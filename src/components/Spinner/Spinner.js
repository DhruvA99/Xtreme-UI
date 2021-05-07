import React from "react";

import classes from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container_main}>
        <div className={classes.container_main_description}>
          <span className={classes.main_heading}>Spinners</span>
          <p>
            A Spinner is a special animated objects which can be used to show
            the loading state in your projects.
          </p>
        </div>
        <div className={classes.usage}>
          <span className={classes.secondary_heading}>Usage</span>
          <span className={classes.tertiery_heading}>Examples</span>

          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              {/* <div className={classes.spinner_main}> */}
              <div className={classes.spinner_primary}></div>
              {/* </div> */}
              {/* <div className={classes.spinner_main}> */}
              <div className={classes.spinner_secondary}></div>
              {/* </div> */}
              {/* <div className={classes.spinner_main}> */}
              <div className={classes.spinner_tertiery}></div>
              {/* </div> */}
            </div>
            <br />
            <span className={classes.codeHeading}>Code:</span>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520className%253D%257Bclasses.spinner_primary%257D%253E%253C%252Fdiv%253E%250A%250A%2520%253Cdiv%2520className%253D%257Bclasses.spinner_secondary%257D%253E%253C%252Fdiv%253E%250A%250A%2520%253Cdiv%2520className%253D%257Bclasses.spinner_tertiery%257D%253E%253C%252Fdiv%253E"
              style={{
                height: "100%",
                minHeight: "300px",
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

export default Spinner;
// &lt;div class="alert alert-normal"&gt;
//   &lt;span&gt;This is a normal alert message---Check this out!&lt;/span&gt;
// &lt;/div&gt;
