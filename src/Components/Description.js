import React from "react";
import profile from "./../assets/my_profile.png";
import { Layout } from "./Layout";
export const Description = () => {
  return (
    <Layout>
      <div className="description">
        <div className="container  ">
          <div className="row">
            <div className="col-md-5 text-center order-md-2">
              <img src={profile} width="80%" alt="" />
            </div>
            <div className="col-md-7 mt-5">
              hi 👋 i'm
              <div className="fs-1 fw-bolder mb-4">Prem Acharya</div>
              <p>
                I am software engineer based in Sydney. I love to code and teach
                other what i know.
              </p>
              <button className="btn btn-danger">
                Download Resume <i className="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
