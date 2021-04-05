import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container_main}>
        <div className={classes.container_main_description}>
          <span className={classes.main_heading}>Cards</span>
          <p>
            Card component provide a flexible and extensible content container
            with multiple variants and options.
          </p>
        </div>
        <div className={classes.usage}>
          <span className={classes.secondary_heading}>Usage</span>
          <span className={classes.tertiery_heading}>Basic Card</span>

          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <div className={classes.card}>
                <img
                  className={classes.card_image}
                  src="https://via.placeholder.com/150"
                  alt="img"
                />

                <div className={classes.card_content}>
                  <span className={classes.card_content_heading}>
                    Card Title
                  </span>
                  <div className={classes.card_content_descriptionDiv}>
                    <span className={classes.card_content_description}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </span>
                  </div>
                  <div className={classes.card_button_group}>
                    <button
                      className={`${classes.btn} ${classes.btn_primary} ${classes.width_50}`}
                    >
                      Go
                    </button>
                    <button
                      className={`${classes.btn} ${classes.btn_primary} ${classes.width_50}`}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <span className={classes.codeHeading}>Code:</span>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.97%29&t=seti&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=49px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card%2522%253E%250A%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520class%253D%2522card_image%2522%250A%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F150%2522%250A%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%253Cdiv%2520class%253D%2522card_content%2522%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522card_content_heading%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Card%2520Title%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522card_content_description%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Some%2520quick%2520example%2520text%2520to%2520build%2520on%2520the%2520card%2520title%2520and%2520make%250A%2520%2520%2520%2520%2520%2520%2520%2520up%2520the%2520bulk%2520of%2520the%2520card%27s%2520content.%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card_button_group%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn_primary%2522%253EGo%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn_primary%2522%253ECancel%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
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
          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <div className={classes.card2}>
                <img
                  className={`${classes.card_image} ${classes.width_100}`}
                  src="https://via.placeholder.com/150"
                  alt="img"
                />
                <div className={classes.ribbon_wrapper}>
                  <div className={classes.ribbon}>SALE</div>
                </div>
                <div className={classes.card_content2}>
                  <span className={classes.card_content_heading}>
                    ProductName
                  </span>
                  <div className={classes.card_content_descriptionDiv}>
                    <div className={classes.card_content_priceDiv}>
                      <span className={classes.card_content_price_discounted}>
                        $352
                      </span>
                      <span className={classes.card_content_price_original}>
                        $400
                      </span>
                      <span className={classes.card_content_price_discount}>
                        (10% OFF)
                      </span>
                    </div>
                  </div>
                </div>
                <div className={classes.custom_button_cart}>
                  <i class="fa fa-cart-arrow-down fa-2x"></i>
                </div>
                <div className={classes.custom_button_wishlist}>
                  <i class="fa fa-heart fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
          <span className={classes.codeHeading}>Code:</span>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.97%29&t=night-owl&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=49px&ln=false&fl=1&fm=Space+Mono&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card2%2522%253E%250A%2520%2520%253Cimg%250A%2520%2520%2520%2520class%253D%2522card_image%2522%250A%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F150%2522%250A%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%252F%253E%250A%2520%2520%253Cdiv%2520class%253D%2522ribbon_wrapper%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522ribbon%2522%253ESALE%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522card_content2%2522%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522card_content_heading%2522%253E%250A%2520%2520%2520%2520%2520%2520ProductName%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card_content_descriptionDiv%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card_content_priceDiv%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card_content_price_discounted%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524352%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card_content_price_original%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524400%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card_content_price_discount%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2810%2525%2520OFF%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522custom_button_cart%2522%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fa%2520fa-cart-arrow-down%2520fa-2x%2522%253E%253C%252Fi%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522custom_button_wishlist%2522%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fa%2520fa-heart%2520fa-2x%2522%253E%253C%252Fi%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style={{
              height: "100%",
              minHeight: "900px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
          <div className={classes.container_usage}>
            <div className={classes.component_boundary}>
              <div className={classes.card3}>
                <img
                  className={`${classes.card_image}`}
                  src="https://picsum.photos/200/300"
                  alt="img"
                />
                <div className={classes.custom_button_play}>
                  <i class="fa fa-play" aria-hidden="true"></i>
                </div>

                <div className={classes.card_content2}>
                  <span className={classes.card_content_heading3}>
                    Video Title
                  </span>
                  <div className={classes.card_content_descriptionDiv}>
                    <div className={classes.card_content_authorDescription}>
                      <span className={classes.card_content_authorName}>
                        John Snow
                      </span>
                      <span className={classes.card_content_views}>
                        23M Views
                      </span>
                    </div>
                    <span className={classes.card_content_videoDescription}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className={classes.codeHeading}>Code:</span>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.97%29&t=night-owl&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=49px&ln=false&fl=1&fm=Space+Mono&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card3%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522card_image%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fpicsum.photos%252F200%252F300%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522custom_button_play%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fa%2520fa-play%2522%2520aria-hidden%253D%2522true%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card_content_2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card_content_heading3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Video%2520Title%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card_content_descriptionDiv%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card_content_authorDescription%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card_content_authorName%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520John%2520Snow%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card_content_views%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252023M%2520Views%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card_content_videoDescription%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Some%2520quick%2520example%2520text%2520to%2520build%2520on%2520the%2520card%2520title%2520and%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520make%2520up%2520the%2520bulk%2520of%2520the%2520card%27s%2520content.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
            style={{
              height: "100%",
              minHeight: "800px",
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
  );
};

export default Card;
// &lt;div class="alert alert-normal"&gt;
//   &lt;span&gt;This is a normal alert message---Check this out!&lt;/span&gt;
// &lt;/div&gt;
