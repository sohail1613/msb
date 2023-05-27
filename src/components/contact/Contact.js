import React, { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const form = useRef();

  //alert msg
  const sentEmailAlert = () => {
    toast.success("Email send successfully.", {
      position: "top-center",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1y3xwfi",
        "template_asy4jli",
        form.current,
        "iWHB0mgmHjb6kGvJI"
      )
      .then(
        (result) => {
          {
            sentEmailAlert();
          }

          console.log(result.text);
          console.log("message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="heading text-center">
            <h2>
            {t("contactUs.contact")}
              <span> {t("contactUs.us")} </span>
            </h2>
            <p>
              {t("contactUs.message")}
              <br />
              {t("contactUs.feedback")}
            </p>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="title">
                <h3>{t("contactUs.contactDetails")}</h3>
                <p>
                {t("contactUs.message")}
                <br />
                {t("contactUs.feedback")}
                </p>
              </div>
              <div className="content">
                {/* Info-1 */}
                <div className="info">
                  <i className="fas fa-mobile-alt" />
                  <h4 className="d-inline-block">
                  {t("contactUs.phone")} :
                    <br />
                    <span>+90 5322 8721 85</span>
                  </h4>
                </div>
                {/* Info-2 */}
                <div className="info">
                  <i className="far fa-envelope" />
                  <h4 className="d-inline-block">
                  {t("contactUs.email")} :
                    <br />
                    <span>msbteknikelektrik@gmail.com</span>
                  </h4>
                </div>
                {/* Info-3 */}
                <div className="info">
                  <i className="fas fa-map-marker-alt" />
                  <h4 className="d-inline-block">
                  {t("contactUs.address")} :<br />
                    <span>Çubuk/Ankara, Turkey</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("contactUs.fullName")}
                      name="to_name"
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("contactUs.phoneNumber")}
                      name="telephone_number"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder={t("contactUs.emailaddress")}
                      name="from_name"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("contactUs.subject")}
                      name="subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows={5}
                    id="comment"
                    placeholder={t("contactUs.messageBox")}
                    name="message"
                    defaultValue={""}
                  />
                </div>
                <button className="btn btn-block" type="submit" value={send}>
                {t("contactUs.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
