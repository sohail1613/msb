import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import Logo from "../assets/logos.avif";
import { AiOutlineGlobal } from "react-icons/ai";

// Contains the value and text for the options
const languages = [
  { value: "", text: "Options" },
  { value: "tr", text: "Türkçe" },
  { value: "en", text: "English" },
];

const Header = (handleLanguage) => {
  const { t, i18n } = useTranslation();

  const { a } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem(lang)
  };

  return (
    <>
      <header className="afc-header afc-header--style-1 afc-header--dark normal">
        <div className="afc-header__navbar">
          <div className="afc-header__container container-fluid">
            <div className="afc-header__navbar__inner">
              <div className="afc-header__navbar__logo">
                <button
                  className="afc-button afc-button--toggle--menu afc-menu-btn afc-menu-btn--hamburger"
                  type="button"
                >
                  <span />
                  <span />
                  <span />
                </button>
                <a href="/">
                  {/* <span>Makina</span> */}
                  <img src={Logo} style={{ width: "500px" }} />
                </a>
              </div>
              <nav className="afc-header__navbar__links d-none d-lg-block d-xl-block">
                <ul className="afc-header__navbar__menu d-flex justify-content-center">
                  <li
                    id="nav-menu-item-1497"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1497"
                    data-menu-anchor
                  >
                    <a href="/">{t("nav.home")}</a>
                  </li>
                  <li
                    id="nav-menu-item-1498"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1498"
                    data-menu-anchor
                  >
                    <a href="/about">{t("nav.aboutus")}</a>
                  </li>
                  <li
                    id="nav-menu-item-1499"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1499"
                    data-menu-anchor
                  >
                    <a href="/products">{t("nav.products")}</a>
                  </li>
                  <li
                    id="nav-menu-item-1500"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1500"
                    data-menu-anchor
                  >
                    <a href="/section">{t("nav.services")}</a>
                    <ul className="sub-menu">
                      <li
                        id="nav-menu-item-2160"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2160"
                      >
                        <a href="/makina">{t("nav.mechanical")}</a>
                      </li>
                      <li
                        id="nav-menu-item-2161"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2161"
                      >
                        <a href="/electric">{t("nav.electrical")}</a>
                      </li>
                      <li
                        id="nav-menu-item-2161"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2161"
                      >
                        <a href="/nakliya">{t("nav.transportation")}</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="nav-menu-item-1501"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1501"
                    data-menu-anchor
                  >
                    <a href="#">{t("nav.announcement")}</a>
                    <ul className="sub-menu">
                      <li
                        id="nav-menu-item-3454"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3454"
                      >
                        <a href="#">{t("nav.newProducts")}</a>
                      </li>
                      <li
                        id="nav-menu-item-3453"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3453"
                      >
                        <a href="http://wp.afracode.com/mitra/blog-chess-style/">
                          {t("nav.news")}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="nav-menu-item-1502"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1502"
                    data-menu-anchor
                  >
                    <a href="/contact">{t("nav.contacts")}</a>
                  </li>
                </ul>
              </nav>
              <nav className="afc-header__navbar__icons">
                <ul>
                  <li>
                    <button
                      className="afc-button afc-button--icon "
                      type="button"
                    >
                      <AiOutlineGlobal
                        onClick={() => handleLanguageChange("en", "tr")}
                      />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
