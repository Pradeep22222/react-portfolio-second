import React from "react";
import profile from "./../assets/my_profile.png";

export const AboutMe = () => {
  return (
    <div>
      <div className="container about mt-5 py-5" id="about">
        <div className="title">
          <span>About Me</span>
        </div>

        <div className="row mt-5">
          <div className="col">
            <img className="tilt" src={profile} alt="" />
          </div>
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              mollitia atque natus sed assumenda sunt quia modi dolore, laborum,
              accusantium ab placeat repudiandae consequuntur beatae dolor
              magni. Tenetur, accusantium fugiat?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              consectetur porro, incidunt aliquid error amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
