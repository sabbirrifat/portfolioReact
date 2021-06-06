import React, { useState } from "react";
import contactBgImage from "../assets/img/overlay-bg.jpg";
import {
  IoCheckmarkCircleOutline,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLocation,
  IoMailUnread,
  IoCall,
} from "react-icons/io5";
import Axios from "axios";

const Contact = () => {
  const [sentSuccess, setSentSuccess] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let bodyFormData = new FormData();
    bodyFormData.append("name", values.name);
    bodyFormData.append("email", values.email);
    bodyFormData.append("subject", values.subject);
    bodyFormData.append("message", values.message);

    Axios({
      method: "post",
      url: "https://formspree.io/mbjzybgo",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res.status === 200) {
          setSentSuccess(true);
        } else {
          alert("Something went wrong. Please try again");
        }
      })
      .catch((e) => console.log("message sent error: ", e));
  };
  return (
    <section
      class="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(${contactBgImage})` }}
    >
      <div class="overlay-mf"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-mf">
              <div id="contact" class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box-2">
                      <h5 class="title-left">Send A Message</h5>
                    </div>
                    <div>
                      <form
                        onSubmit={handleSubmit}
                        role="form"
                        class="php-email-form"
                      >
                        <div class="row">
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input
                                type="text"
                                name="name"
                                class="form-control"
                                id="name"
                                onChange={handleChange}
                                placeholder="Your Name"
                                minLength="4"
                                data-msg="Please enter at least 4 chars"
                                required
                              />
                              <div class="validate"></div>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                required
                              />
                              <div class="validate"></div>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                name="subject"
                                id="subject"
                                onChange={handleChange}
                                placeholder="Subject"
                                minLength="4"
                                required
                                data-msg="Please enter at least 8 chars of subject"
                              />
                              <div class="validate"></div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <textarea
                                class="form-control"
                                name="message"
                                onChange={handleChange}
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                                required
                              ></textarea>
                              <div class="validate"></div>
                            </div>
                          </div>
                          <div class="col-md-12 text-center mb-3">
                            {sentSuccess ? (
                              <div class="loading">
                                <IoCheckmarkCircleOutline /> Your message has
                                been sent. Thank you!
                              </div>
                            ) : null}
                          </div>
                          <div class="col-md-12 text-center">
                            <button
                              type="submit"
                              class="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="title-box-2 pt-4 pt-md-0">
                      <h5 class="title-left">Get in Touch</h5>
                    </div>
                    <div class="more-info">
                      <p class="lead">
                        If you want to know anything about me please don't
                        hesitate to contact me
                      </p>
                      <ul class="list-ico">
                        <li>
                          <span class="ion-ios-location">
                            {" "}
                            <IoLocation  />{" "}
                          </span>{" "}
                          Dohar Nawabganj College Hostel, Dhaka 1320, BD
                        </li>
                        <li>
                          <span class="ion-ios-telephone">
                            {" "}
                            <IoCall />{" "}
                          </span>
                          +880 182475-2849
                        </li>
                        <li>
                          <span class="ion-email">
                            {" "}
                            <IoMailUnread />{" "}
                          </span>{" "}
                          <strong>
                            <a
                              href="mailto:info@sabbirrifat.com"
                              style={{ color: "black", textDecoration: "none" }}
                            >
                              info@sabbirrifat.com
                            </a>
                          </strong>
                        </li>
                      </ul>
                    </div>
                    <div class="socials">
                      <ul>
                        <li>
                          <a
                            href="https://github.com/sabbirrifat"
                            target="_blank"
                          >
                            <span class="ico-circle">
                              <IoLogoGithub style={{ width: '25px'}} />
                              {/* <i class="ion-social-instagram"></i> */}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/sabbir-rifat/"
                            target="_blank"
                          >
                            <span class="ico-circle">
                              <IoLogoLinkedin style={{ width: '25px'}} />
                              {/* <i class="ion-social-facebook"></i> */}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/workwithrifat"
                            target="_blank"
                          >
                            <span class="ico-circle">
                              <IoLogoTwitter style={{ width: '25px'}} />
                              {/* <i class="ion-social-twitter"></i> */}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
