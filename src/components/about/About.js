import React from "react";
import "./About.css";
import Probe from "../../assets/complete_probe.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="heading text-center">
            <h2>
              About
              <span>Us</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src={Probe} alt="about" className="img-fluid" width="100%" />
            </div>
            <div className="col-lg-6">
              <h3>Lorem ipsum dolor sit amet, consectetur </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    {t("about.design")}
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    {t("about.creative")}
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    {t("about.service")}
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    {t("about.manufacturing")} 
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    {t("about.durability")}
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    {t("about.speed")}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
