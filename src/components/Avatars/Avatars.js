import classes from "./Avatars.module.css";
import React from "react";

const Avatar = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container_main}>
        <div className={classes.container_main_description}>
          <span className={classes.main_heading}>Avatars</span>
          <p>Avatar</p>
        </div>
        <div className={classes.usage}>
          <span className={classes.secondary_heading}>Usage</span>
          <span className={classes.tertiery_heading}>Simple Avatar</span>

          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <div className={classes.avatar_normal}>
                <img
                  className={classes.avatar_image}
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="img"
                />
              </div>
              <div className={classes.avatar_normal}>
                <img
                  className={classes.avatar_image}
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="img"
                />
                <span
                  className={`${classes.status} ${classes.online_status}`}
                ></span>
              </div>
              <div className={classes.avatar_normal}>
                <img
                  className={classes.avatar_image}
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="img"
                />
                <span
                  className={`${classes.status} ${classes.idle_status}`}
                ></span>
              </div>
              <div className={classes.avatar_normal}>
                <img
                  className={classes.avatar_image}
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="img"
                />
                <span
                  className={`${classes.status} ${classes.offline_status}`}
                ></span>
              </div>
            </div>
            <br />
            <span className={classes.codeHeading}>Code:</span>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.97%29&t=night-owl&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=49px&ln=false&fl=1&fm=Space+Mono&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520class%253D%2522avatar_normal%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522avatar_image%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1535713875002-d1d0cf377fde%253Fixid%253DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%25253D%2526ixlib%253Drb-1.2.1%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D1000%2526q%253D80%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar_normal%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522avatar_image%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1535713875002-d1d0cf377fde%253Fixid%253DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%25253D%2526ixlib%253Drb-1.2.1%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D1000%2526q%253D80%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522status%2520online_status%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar_normal%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522avatar_image%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1535713875002-d1d0cf377fde%253Fixid%253DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%25253D%2526ixlib%253Drb-1.2.1%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D1000%2526q%253D80%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522status%2520idle_status%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar_normal%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522avatar_image%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1535713875002-d1d0cf377fde%253Fixid%253DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%25253D%2526ixlib%253Drb-1.2.1%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D1000%2526q%253D80%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522status%2520offline_status%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"
              style={{
                height: "100%",
                minHeight: "1000px",
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

export default Avatar;
