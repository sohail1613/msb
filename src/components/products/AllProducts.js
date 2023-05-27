import React from "react";
import "./AllProducts.css";
import GrainSampler from "../../assets/grainSampler.jpg";
import CottonBag from "../../assets/cottonBag.jpg";
import WeightMachine from "../../assets/weight_machine.avif";
import Electric from "../../assets/electric.jpg";
import Nilemalitre from "../../assets/gab_315.jpg";
import Bölücü from "../../assets/gab_310.jpg";
import Hektolitre from "../../assets/gab_300.jpg";
import { useTranslation } from "react-i18next";

const AllProducts = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={GrainSampler}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>{t("products.model1")}</h3>
              <p>{t("productDescription.product1")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={WeightMachine}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>{t("products.model2")}</h3>
              <p>{t("productDescription.product2")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={CottonBag}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>{t("products.model3")} </h3>
              <p>{t("productDescription.product3")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={Electric}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>{t("products.model4")}</h3>
              <p>{t("productDescription.product4")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={Nilemalitre}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>{t("products.model5")}</h3>
              <p>{t("productDescription.product5")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={Bölücü}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>{t("products.model6")}</h3>
              <p>{t("productDescription.product6")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={Hektolitre}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>{t("products.model7")}</h3>
              <p>{t("productDescription.product7")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
