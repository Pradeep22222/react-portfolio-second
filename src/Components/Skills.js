import React from "react";

export const Skills = () => {
  return (
    <div>
      <div className="container" id="skills">
        <div className="row mt-5">
          <div className="col">
            {/* <!-- title --> */}
            <div className="title">
              <span>Skills</span>
            </div>

            {/* <!-- icons --> */}
            <div className="icons fw-bolder d-flex flex-wrap justify-content-around">
              <div>
                <i className="fa-brands fa-html5 text-danger"></i> HTML5
              </div>
              <div>
                <i className="fa-brands fa-css3-alt text-primary"></i> CSS3
              </div>
              <div>
                <i className="fa-brands fa-js-square text-warning"></i>{" "}
                JavaScript
              </div>
              <div>
                <i className="fa-brands fa-bootstrap text-info"></i> Bootstrap
              </div>
              <div>
                <i className="fa-brands fa-figma text-danger"></i> Figma
              </div>
              <div>
                <i className="fa-brands fa-github-square"></i> Github
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
