import React from "react";
import "./Section.css";
import SimpleImageSlider from "react-simple-image-slider";
import Probe from "../assets/probe.png";
import Slider from "./slider/Slider";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <div className="afc-fullscreen-menu afc-fullscreen-menu--style-3">
          <div>
            <div className="afc-fullscreen-menu__logo afc-fullscreen-menu__logo--style-3">
              <button className="afc-button--toggle--menu js--toggle--menu afc-close-btn" />
            </div>
            <span className="afc-fullscreen-menu__overlay afc-fullscreen-menu__close" />
          </div>
        </div>
        <div className="afc-search-form afc-search-form--style-1">
          <div className="afc-search-form__logo afc-search-form__logo--style-1">
            {/* <span className="afc-fullscreen-menu__logo__text">Mitra</span> */}
          </div>
          <button
            type="button"
            className="afc-button afc-button--close js-toggle--search-form afc-close-btn"
          >
            <span />
          </button>
          <div className="container">
            <form method="get" action="#">
              <input
                type="search"
                defaultValue
                placeholder="Type words and hit enter"
                name="s"
              />
              <button type="submit" className="afc-button afc-button--search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                >
                  <g />
                  <path d="M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="afc-wrapper afc-wrapper--canvas">
          <article className="afc-page afc-page--canvas post-438 page type-page status-publish hentry">
            <div
              data-elementor-type="wp-page"
              data-elementor-id={438}
              className="elementor elementor-438"
              data-elementor-settings="[]"
            >
              <div className="elementor-inner">
                <div className="elementor-section-wrap">
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-281f8cb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="281f8cb"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e2661b0"
                          data-id="e2661b0"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-c4cac5b elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="c4cac5b"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e6555fe"
                                      data-id="e6555fe"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-0ca1fa5 elementor-widget elementor-widget-afracode-creative-tag"
                                            data-id="0ca1fa5"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-creative-tag.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div>
                                                <div className="afc-creative-tag afc-creative-tag--style-1">
                                                  <span className="afc-creative-tag__text">
                                                    {t("details.quality")}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-d817f66 elementor-align-left elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="d817f66"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h2 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                      {t("details.review")}
                                                      {/* <br />
                                                      Successfully */}
                                                    </span>
                                                  </h2>
                                                  <p className="afc-heading__subtitle">
                                                    {t("details.experiences")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e2271a6"
                                      data-id="e2271a6"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-463e02f elementor-align-center elementor-widget elementor-widget-afracode-infobox-image"
                                            data-id="463e02f"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-list afc-list--infobox">
                                                <div className="afc-list__content">
                                                  <div
                                                    className="row afc-row-sm"
                                                    style={{
                                                      "-webkit-box-pack":
                                                        "center",
                                                      "-webkit-justify-content":
                                                        "center",
                                                      "-ms-flex-pack": "center",
                                                      "justify-content":
                                                        "center",
                                                    }}
                                                  >
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                      <div className="afc-infobox-img">
                                                        <div className="afc-infobox-img__head" />
                                                        <div className="afc-infobox-img__body">
                                                          <h4 className="afc-infobox-img__title">
                                                            18+
                                                          </h4>
                                                          <p className="afc-infobox-img__description">
                                                            {t(
                                                              "details.experience"
                                                            )}
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                      <div className="afc-infobox-img">
                                                        <div className="afc-infobox-img__head" />
                                                        <div className="afc-infobox-img__body">
                                                          <h4 className="afc-infobox-img__title">
                                                            507+
                                                          </h4>
                                                          <p className="afc-infobox-img__description">
                                                            {t(
                                                              "details.deliveredProjects"
                                                            )}
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                      <div className="afc-infobox-img">
                                                        <div className="afc-infobox-img__head" />
                                                        <div className="afc-infobox-img__body">
                                                          <h4 className="afc-infobox-img__title">
                                                            100%
                                                          </h4>
                                                          <p className="afc-infobox-img__description">
                                                            {t(
                                                              "details.clientSatisfaction"
                                                            )}
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-7fb5789 elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="7fb5789"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4397257"
                                      data-id={4397257}
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="elementor-element elementor-element-fddc8e9 elementor-widget elementor-widget-afracode-portfolio"
                                            data-id="fddc8e9"
                                            data-element_type="widget"
                                            data-settings='{"afc_transform":"none","afc_animation_name":"none"}'
                                            data-widget_type="afracode-portfolio.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-grid">
                                                <div>
                                                  <div>
                                                    <div className="afc-grid-row afc-grid-row--">
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={11}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                src="./Personal – 3 – Mitra_files/My project.jpg"
                                                                alt="image"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                              {t("machineParts.grain")}
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  {t("machineParts.probe")}
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="/products"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={11}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                // src="./Personal – 3 – Mitra_files/New-Project-10-600x600.jpg"
                                                                src="./Personal – 3 – Mitra_files/gab_315.jpg"
                                                                alt="image"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                              {t("machineParts.grain")}
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  {t("machineParts.wheat")}
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="/products"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={10}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                // src="./Personal – 3 – Mitra_files/New-Project-11-600x600.jpg"
                                                                src="./Personal – 3 – Mitra_files/weight_machine.avif"
                                                                alt="Weight machine"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                              {t("machineParts.weightMachine")}
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  {t("machineParts.electric")}
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="/products"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={7}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                // src="./Personal – 3 – Mitra_files/New-Project-12-600x600.jpg"
                                                                src="./Personal – 3 – Mitra_files/My project-1.png"
                                                                alt="Minimal Design Artwork"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                              {t("machineParts.bag")}
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  {t("machineParts.textile")}
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="/products"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={13}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                // src="./Personal – 3 – Mitra_files/New-Project-13-600x600.jpg"
                                                                src="./Personal – 3 – Mitra_files/My project-2.png"
                                                                alt="Consumer Electronics"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                                {t("machineParts.electronics")}
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  katkı
                                                                  karıştırıcı
                                                                  makinesi
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="/products"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={13}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                // src="./Personal – 3 – Mitra_files/New-Project-14-600x600.jpg"
                                                                src="./Personal – 3 – Mitra_files/msb_gab_301.avif"
                                                                alt="Home Appliances"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                                {t("machineParts.machinePart")}
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  {t("machineParts.grain")}
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="/products"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-0b33cf5 elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="0b33cf5"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b8b09c8"
                                      data-id="b8b09c8"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-f745588 elementor-align-center elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="f745588"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h2 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                    {t("publicReview.connectMsg")}
                                                      &amp;
                                                      <br />
                                                      {t("publicReview.update")}
                                                    </span>
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-28b7b4f elementor-widget elementor-widget-afracode-testimonial-carousel"
                                            data-id="28b7b4f"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-testimonial-carousel.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                           
                                          </div>
                                          <div
                                            className="wow afc-animate-widget fadeInDown elementor-element elementor-element-f44331e elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-afracode-shape"
                                            data-wow-duration="2400ms"
                                            data-wow-delay="600ms"
                                            data-id="f44331e"
                                            data-element_type="widget"
                                            data-settings='{"_position":"absolute","afc_animation_name":"fadeInDown","afc_animation_duration":2400,"afc_transform":"none"}'
                                            data-widget_type="afracode-shape.default"
                                            style={{
                                              visibility: "visible",
                                              WebkitAnimationDuration: "2400ms",
                                              animationDuration: "2400ms",
                                              WebkitAnimationDelay: "600ms",
                                              animationDelay: "600ms",
                                              "-webkit-animation-name":
                                                "_fadeInDown",
                                              "animation-name": "_fadeInDown",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-shape">
                                                <div className="afc-shape__element afc-shape__element--circle" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <div
                                className="elementor-element elementor-element-39fa673 elementor-absolute elementor-widget elementor-widget-image"
                                data-id="39fa673"
                                data-element_type="widget"
                                data-settings='{"_position":"absolute","afc_transform":"none","afc_animation_name":"none"}'
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-image">
                                    <img
                                      decoding="async"
                                      width={819}
                                      height={403}
                                      src="./Personal – 3 – Mitra_files/kindpng_686416.png"
                                      className="attachment-mitra-1280x720_crop size-mitra-1280x720_crop"
                                      alt="image"
                                      loading="lazy"
                                      srcSet="
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/kindpng_686416.png         819w,
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/kindpng_686416-300x148.png 300w,
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/kindpng_686416-768x378.png 768w,
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/kindpng_686416-800x394.png 800w
                            "
                                      sizes="(max-width: 819px) 100vw, 819px"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-b8bd22c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="b8bd22c"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c5f1e62"
                          data-id="c5f1e62"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-135fbed elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="135fbed"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-97d1828"
                                      data-id="97d1828"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeIn elementor-element elementor-element-f69374e elementor-align-center elementor-widget elementor-widget-afracode-creative-tag"
                                            data-id="f69374e"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeIn","afc_transform":"none"}'
                                            data-widget_type="afracode-creative-tag.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeIn",
                                              "animation-name": "_fadeIn",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div>
                                                <div className="afc-creative-tag afc-creative-tag--style-1">
                                                  <span className="afc-creative-tag__text">
                                                    {/* Services */}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-ec136d1 elementor-align-center elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="ec136d1"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h2 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                      {/* Special Quotes from <br /> */}
                                                      {t("nav.services")}
                                                    </span>
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            data-parallax='{"y":60,"scale":1.5}'
                                            className="elementor-element elementor-element-0a99e32 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-afracode-shape"
                                            data-id="0a99e32"
                                            data-element_type="widget"
                                            data-settings='{"_position":"absolute","afc_transform":"none","afc_animation_name":"none"}'
                                            data-widget_type="afracode-shape.default"
                                            style={{
                                              "-webkit-transform":
                                                "translate3d(                                              0px,                                              0.029px,                                              0px                                            )                                            rotateX(0deg) rotateY(0deg)                                            rotateZ(0deg) scaleX(1.029)                                            scaleY(1.029) scaleZ(1.029)",
                                              "-ms-transform":
                                                "translate3d(                                              0px,                                              0.029px,                                              0px                                            )                                            rotateX(0deg) rotateY(0deg)                                            rotateZ(0deg) scaleX(1.029)                                            scaleY(1.029) scaleZ(1.029)",
                                              transform:
                                                "translate3d(                                              0px,                                              0.029px,                                              0px                                            )                                            rotateX(0deg) rotateY(0deg)                                            rotateZ(0deg) scaleX(1.029)                                            scaleY(1.029) scaleZ(1.029)",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-shape">
                                                <div className="afc-shape__element afc-shape__element--circle" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-a75e397 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="a75e397"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ea850b4"
                                      data-id="ea850b4"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-c777191 elementor-align-left elementor-widget elementor-widget-afracode-infobox-image"
                                            data-id="c777191"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img afc-infobox-img--style-1">
                                                <div className="afc-infobox-img__head">
                                                  <span className="afc-infobox-img__icon">
                                                    <i
                                                      aria-hidden="true"
                                                      className="far fa-gem"
                                                    />
                                                  </span>
                                                </div>
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    {t("nav.mechanical")}
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    {t("service.mechanic")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9a9f776"
                                      data-id="9a9f776"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-5a60fa0 elementor-align-left elementor-widget elementor-widget-afracode-infobox-image"
                                            data-wow-delay="200ms"
                                            data-id="5a60fa0"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              WebkitAnimationDelay: "200ms",
                                              animationDelay: "200ms",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img afc-infobox-img--style-1">
                                                <div className="afc-infobox-img__head">
                                                  <span className="afc-infobox-img__icon">
                                                    <i
                                                      aria-hidden="true"
                                                      className="far fa-sun"
                                                    />
                                                  </span>
                                                </div>
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    {t("nav.electrical")}
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    {t("service.electric")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5b95b93 elementor-hidden-tablet"
                                      data-id="5b95b93"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-84416f0 elementor-align-left elementor-widget elementor-widget-afracode-infobox-image"
                                            data-wow-delay="400ms"
                                            data-id="84416f0"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              WebkitAnimationDelay: "400ms",
                                              animationDelay: "400ms",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img afc-infobox-img--style-1">
                                                <div className="afc-infobox-img__head">
                                                  <span className="afc-infobox-img__icon">
                                                    <i
                                                      aria-hidden="true"
                                                      className="fas fa-chart-pie"
                                                    />
                                                  </span>
                                                </div>
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    {t("nav.transportation")}
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    {t("service.transportation")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-d29fba2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="d29fba2"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-background-overlay" />
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-68ce8c1"
                          data-id="68ce8c1"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-790c098 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="790c098"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-default">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-21e8306"
                                      data-id="21e8306"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-c7026b3 elementor-align-center elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="c7026b3"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h2 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                      {t("details.review")}
                                                      <br />
                                                      
                                                    </span>
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-e4c1e00 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="e4c1e00"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-extended">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-60dde88"
                                      data-id="60dde88"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-f44ba8e elementor-align-center elementor-widget elementor-widget-afracode-infobox-image"
                                            data-id="f44ba8e"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img">
                                                <div className="afc-infobox-img__head" />
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    507+
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    {t("details.finished")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0a80eb3"
                                      data-id="0a80eb3"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-cb640c6 elementor-align-center elementor-widget elementor-widget-afracode-infobox-image"
                                            data-id="cb640c6"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img">
                                                <div className="afc-infobox-img__head" />
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    18+
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    {t("details.experience")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-cfad321"
                                      data-id="cfad321"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-8f9ad71 elementor-align-center elementor-widget elementor-widget-afracode-infobox-image"
                                            data-id="8f9ad71"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img">
                                                <div className="afc-infobox-img__head" />
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    10
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    {t("details.countries")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Section;
