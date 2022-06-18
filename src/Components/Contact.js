import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className="container" id="contact">
        <div className="title">
          <span>Contact Me</span>
        </div>

        <div className="row fa-5x">
          <div className="col d-flex justify-content-around">
            <a href="tel:0413705873">
              <i className="fa-solid fa-mobile-retro"></i>
            </a>

            <a href="mailto:myemail@com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://github.com/" target="_blank">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
