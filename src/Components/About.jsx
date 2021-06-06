import React from "react";
import Fade from "react-reveal/Fade";
import javascript from "../assets/img/javascript.png";
import nodejs from "../assets/img/nodejs.png";
import react from "../assets/img/react.png";

const About = () => {
  return (
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                FRONT END FOCUSED
                <br />
                WITH FULL STACK EXPERIENCE
              </h3>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row aboutContentStyle">
          <div class="col-lg-6 col-sm-12 animate-left">
            <Fade left>
              <div class="row">
                <h2>Motivated to produce results</h2>
                <p>
                  As a tenacious self-taught programmer, I use continuous
                  iteration to produce results quickly and continuously improve
                  products.
                </p>
              </div>
              <div class="row">
                <h2>AN AGILE COLLABORATOR</h2>
                <p>
                  I have contributed to open source projects, worked on
                  engineering teams, and always stay attuned to the newest
                  frameworks.
                </p>
              </div>
            </Fade>
          </div>

          <div class="col-lg-6 col-sm-12 imgContentStyle animate-right">
            <Fade right>
              <div class="imgContent d-flex flex-row flex-wrap">
                <img src={javascript} alt="" />
                <img src={nodejs} alt="" />
                <img src={react} alt="" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
