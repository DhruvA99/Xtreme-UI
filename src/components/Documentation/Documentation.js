import classes from "./Documentation.module.css";
import React from "react";

const Documentation = () => {
  return (
    <div className={classes.main}>
      <span className={classes.heading}>Documentation</span>

      <div className={classes.content}>
        <span className={classes.heading2}>Getting Started</span>
        <div className={classes.gettingStartedContent}>
          <span>
            You can directly get started by importing the our hosted css file in
            your main css file{" "}
          </span>
          <div className={classes.codeSnippet}>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0%29&t=panda-syntax&wt=bw&l=jsx&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=12.5px&lh=138%25&si=false&es=2x&wm=false&code=%2540import%2520url%28%2522https%253A%252F%252Fxtremeui.netlify.app%252FmainStyle.css%2522%29%253B"
              style={{
                width: "591px",
                height: " 206px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
          <br />
          <span>
            Or You can add the following link tag in your index.html file to
            import the css file.
          </span>
          <div className={classes.codeSnippet}>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=49px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fxtremeui.netlify.app%252FmainStyle.css%2522%253E"
              style={{
                width: "591px",
                height: " 246px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
          <div className={`${classes.alert} ${classes.alert_normal}`}>
            <span>
              <strong>Note:</strong> Import your own css styles after you import
              the above css file for Xtreme UI, so you can easily override the
              xtreme UI css files
            </span>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
