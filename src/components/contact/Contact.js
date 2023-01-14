import React, { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
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
              Contact
              <span> Us </span>
            </h2>
            <p>
              Feel free to contact if you have any query, we appricaite you time
              and feedback
              <br />
              Fill the form given below
            </p>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="title">
                <h3>Contact detail</h3>
                <p>
                  Feel free to contact if you have any query,
                  <br /> we appricaite you time and feedback{" "}
                </p>
              </div>
              <div className="content">
                {/* Info-1 */}
                <div className="info">
                  <i className="fas fa-mobile-alt" />
                  <h4 className="d-inline-block">
                    PHONE :
                    <br />
                    <span>+90 5322 8721 85</span>
                  </h4>
                </div>
                {/* Info-2 */}
                <div className="info">
                  <i className="far fa-envelope" />
                  <h4 className="d-inline-block">
                    EMAIL :
                    <br />
                    <span>msbteknikelektrik@gmail.com</span>
                  </h4>
                </div>
                {/* Info-3 */}
                <div className="info">
                  <i className="fas fa-map-marker-alt" />
                  <h4 className="d-inline-block">
                    ADDRESS :<br />
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
                      placeholder="Enter Full Name"
                      name="to_name"
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telelphone number"
                      name="telephone_number"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="from_name"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows={5}
                    id="comment"
                    placeholder="Message"
                    name="message"
                    defaultValue={""}
                  />
                </div>
                <button className="btn btn-block" type="submit" value={send}>
                  Submit
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
