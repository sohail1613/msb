import React from "react";
import "./Footer.css";
import Logo from "../assets/logos.avif";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        {/*  FOOTER START */}
        <div className="footer">
          <div className="inner-footer">
            {/*  for company name and description */}
            <div className="footer-items">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
              {/* <h1>MSB Makina</h1> */}
              {/* <img src={Logo}/> */}
              <p>
              {t('footer.paragraph')}
              </p>
            </div>
            {/*  for quick links  */}
            <div className="footer-items">
              <h3>{t('footer.quickLinks')}</h3>
              <div className="border1" /> {/*for the underline */}
              <ul>
                <a href="/">
                  <li>{t('footer.home')}</li>
                </a>
                <a href="#">
                  <li>{t('footer.search')}</li>
                </a>
                <a href="/contact">
                  <li>{t('footer.contacts')}</li>
                </a>
                <a href="/about">
                  <li>{t('footer.aboutus')}</li>
                </a>
              </ul>
            </div>
            {/*  for some other links */}
            <div className="footer-items">
              <h3>{t('footer.services')}</h3>
              <div className="border1" /> {/*for the underline */}
              <ul>
                <a href="/products">
                  <li>{t('footer.grainSampler')}</li>
                </a>
                <a href="#">
                  <li>{t('footer.electrical')}</li>
                </a>
                <a href="#">
                  <li>{t('footer.mechanical')}</li>
                </a>
                <a href="/products">
                  <li>{t('footer.transportation')}</li>
                </a>
              </ul>
            </div>
            {/*  for contact us info */}
            <div className="footer-items">
              <h3>{t('footer.contacts')}</h3>
              <div className="border1" />
              <ul>
                <li>
                  <i className="fa fa-phone" aria-hidden="true" />
                  +90-542 681 78 67
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true" />
                  +90-532 287 21 85
                </li>
                <li>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=msbteknikelektrik@gmail.com">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </a>
                  msbteknikelektrik@gmail.com
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/jzty16BDVQ7i2sCC8">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                  </a>
                  Çubuk/Ankara, Turkey
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send/?phone=905322872185&text&type=phone_number&app_absent=0">
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </a>
                  {t('footer.whatsapp')}
                </li>
                <li>
                  <a href="https://www.instagram.com/msbelektrikmakina/">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                  {t('footer.instagram')}
                </li>
              </ul>
              {/*   for social links */}
              <div className="social-media">
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-facebook" />
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-square" />
                </a>
              </div>
            </div>
          </div>
          {/*   Footer Bottom start  */}
          <div className="footer-bottom">{t('footer.copyright')} © MSB Makina 2022.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
