import React from "react";

import calculator from "./../assets/calculator.png";
export const Projects = () => {
  return (
    <div>
      <section className="projects py-5" id="projects">
        <div className="title">
          <span>Projects</span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <img src={calculator} width="100%" height="auto" alt="" />
            </div>
            <div className="col-md c-p pt-5 text-light">
              <div className="p-4">
                <h2 className="fw-bolder">My Portfolio Website</h2>
                <div>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <p className="mt-2">Tech used: HTML5, CSS3</p>
                <p>
                  odio repudiandae in excepturi eligendi facere aspernatur
                  voluptatum quasi esse praesentium nostrum saepe nam
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4 mt-md-0">
            <div className="col-md order-md-2">
              <img src={calculator} width="100%" height="auto" alt="" />
            </div>
            <div className="col-md c-p pt-5 text-light bg-primary">
              <div className="p-4">
                <h2 className="fw-bolder">My Portfolio Website</h2>
                <div>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <p className="mt-2">Tech used: HTML5, CSS3</p>
                <p>
                  odio repudiandae in excepturi eligendi facere aspernatur
                  voluptatum quasi esse praesentium nostrum saepe nam
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4 mt-md-0">
            <div className="col-md">
              <img src={calculator} width="100%" height="auto" alt="" />
            </div>
            <div className="col-md c-p pt-5 bg-warning">
              <div className="p-4">
                <h2 className="fw-bolder">My Portfolio Website</h2>
                <div>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <p className="mt-2">Tech used: HTML5, CSS3</p>
                <p>
                  odio repudiandae in excepturi eligendi facere aspernatur
                  voluptatum quasi esse praesentium nostrum saepe nam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
