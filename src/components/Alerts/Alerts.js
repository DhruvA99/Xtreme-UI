import React from "react";
import classes from "./Alerts.module.css";

const Alerts = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container_main}>
        <div className={classes.container_main_description}>
          <span className={classes.main_heading}>Alerts</span>
          <p>
            Provide contextual feedback messages for typical user actions with
            the handful of available and flexible alert messages.
          </p>
        </div>
        <div className={classes.usage}>
          <span className={classes.secondary_heading}>Usage</span>
          <span className={classes.tertiery_heading}>Simple Alerts</span>
          <p>
            The alert offers four severity levels that set a distinctive icon
            and color.
          </p>
          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <div className={`${classes.alert} ${classes.alert_normal}`}>
                <span>This is a normal alert message--Check it out!</span>
              </div>
              <div className={`${classes.alert} ${classes.alert_warning}`}>
                <i className="fa fa-exclamation" aria-hidden="true"></i>
                <span>This is a warning alert message--Check it out!</span>
              </div>
              <div className={`${classes.alert} ${classes.alert_success}`}>
                <i className="fa fa-check" aria-hidden="true"></i>
                <span>This is a success alert message--Check it out!</span>
              </div>
              <div className={`${classes.alert} ${classes.alert_error}`}>
                <i
                  className="fa fa-exclamation-triangle"
                  aria-hidden="true"
                ></i>
                <span>This is a error alert message--Check it out!</span>
              </div>
            </div>
            <br />
            <span className={classes.codeHeading}>Code</span>
            {/* <div className={classes.component_code}>
              <pre className={classes.code_snippet}>{`
<div class="alert alert_normal">
  <span>This is a normal alert message--Check it out!</span>
</div>`}</pre>
              <pre className={classes.code_snippet}>{`
<div class="alert alert_warning">
  <i className="fa fa-exclamation" aria-hidden="true"></i>
  <span>This is a warning alert message--Check it out!</span>
</div>`}</pre>
              <pre className={classes.code_snippet}>{`
<div class="alert alert_success">
  <i className="fa fa-check" aria-hidden="true"></i>
  <span>This is a success alert message--Check it out!</span>
</div>`}</pre>
              <pre className={classes.code_snippet}>{`
<div class="alert alert_error">
  <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
  <span>This is a error alert message--Check it out!</span>
</div>`}</pre>
            </div> */}
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.97%29&t=seti&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=49px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=true&code=%253Cdiv%2520class%253D%2522alert%2520alert_normal%2522%253E%250A%2520%2520%253Cspan%253EThis%2520is%2520a%2520normal%2520alert%2520message--Check%2520it%2520out%21%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522alert%2520alert_warning%2522%253E%250A%2520%2520%253Ci%2520className%253D%2522fa%2520fa-exclamation%2522%2520aria-hidden%253D%2522true%2522%253E%253C%252Fi%253E%250A%2520%2520%253Cspan%253EThis%2520is%2520a%2520warning%2520alert%2520message--Check%2520it%2520out%21%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522alert%2520alert_success%2522%253E%250A%2520%2520%253Ci%2520className%253D%2522fa%2520fa-check%2522%2520aria-hidden%253D%2522true%2522%253E%253C%252Fi%253E%250A%2520%2520%253Cspan%253EThis%2520is%2520a%2520success%2520alert%2520message--Check%2520it%2520out%21%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522alert%2520alert_error%2522%253E%250A%2520%2520%253Ci%2520className%253D%2522fa%2520fa-exclamation-triangle%2522%2520aria-hidden%253D%2522true%2522%253E%253C%252Fi%253E%250A%2520%2520%253Cspan%253EThis%2520is%2520a%2520error%2520alert%2520message--Check%2520it%2520out%21%253C%252Fspan%253E%250A%253C%252Fdiv%253E"
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

export default Alerts;
