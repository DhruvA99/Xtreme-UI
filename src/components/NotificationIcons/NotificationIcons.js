import React from "react";
import classes from "./NotificationIcons.module.css";

const NotificationIcons = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container_main}>
        <div className={classes.container_main_description}>
          <span className={classes.main_heading}>Notification Badges</span>
          <p>
            A tooltip is often used to specify extra information about something
            when the user moves the mouse pointer over an element:
          </p>
        </div>
        <div className={classes.usage}>
          <span className={classes.secondary_heading}>Usage</span>
          <span className={classes.tertiery_heading}>
            Simple Notifications on Buttons
          </span>

          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <button
                className={`${classes.btn} ${classes.btn_primary}  ${classes.badge_main}`}
              >
                Cart
                <span className={classes.badge_circle_right}>3</span>
              </button>
              <button
                className={`${classes.btn} ${classes.btn_primary} ${classes.badge_main}`}
              >
                Cart
                <span className={classes.badge_circle_left}>3</span>
              </button>
              <button
                className={`${classes.btn} ${classes.btn_primary} ${classes.badge_main}`}
              >
                Message
                <span className={classes.badge_box_right}>new</span>
              </button>
            </div>
            <br />
            <span className={classes.codeHeading}>Code:</span>

            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520brn_primary%2520badge_main%2522%253E%250A%2520%2520%2520%2520Cart%250A%2509%253Cspan%2520class%253D%2522badge_circle_right%2522%253E3%253C%252Fspan%253E%250A%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520brn_primary%2520badge_main%2522%253E%250A%2509Cart%250A%2509%253Cspan%2520class%253D%2522badge_circle_left%2522%253E3%253C%252Fspan%253E%250A%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520brn_primary%2520badge_main%2522%253E%250A%2509Message%250A%2509%253Cspan%2520class%253D%2522badge_box_right%2522%253Enew%253C%252Fspan%253E%250A%253C%252Fbutton%253E"
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
          <span className={classes.tertiery_heading}>
            Notifications for Icons
          </span>

          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <div className={classes.badge_main}>
                <i className="fa fa-shopping-cart fa-2x">
                  <span className={classes.badgeIcon_circle_right}>3</span>
                </i>
              </div>
              <div className={classes.badge_main}>
                <i className="fa fa-envelope fa-2x">
                  <span className={classes.badgeIcon_circle_right}>3</span>
                </i>
              </div>
            </div>
            <br />
            <span className={classes.codeHeading}>Code:</span>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522badge_main%2522%253E%250A%2509%253Ci%2520className%253D%2522fas%2520fa-shopping-cart%2520fa-2x%2522%253E%250A%2520%2509%2509%253Cspan%2520class%253D%2522badgeIcon_circle_right%2522%253E3%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fi%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522badge_main%2522%253E%250A%2509%253Ci%2520className%253D%2522fas%2520fa-envelope%2520fa-2x%2522%253E%250A%2520%2509%2509%253Cspan%2520class%253D%2522badgeIcon_circle_right%2522%253E3%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fi%253E%250A%253C%252Fdiv%253E"
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

export default NotificationIcons;
// &lt;div class="alert alert-normal"&gt;
//   &lt;span&gt;This is a normal alert message---Check this out!&lt;/span&gt;
// &lt;/div&gt;
