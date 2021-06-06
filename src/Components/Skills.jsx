import React from "react";
import {
  IoServerOutline,
  IoAnalyticsOutline,
  IoBrowsersOutline,
} from "react-icons/io5";
import Slide from 'react-reveal/Slide';

const Skills = () => {
  return (
    <section
      id="service"
      class="services-mf pt-5 route"
      style={{ background: "#f5f5f5" }}
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">Skills</h3>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <Slide left>
              <>
                <div class="service-box">
                  <div class="service-ico">
                    <span class="ico-circle">
                      <IoBrowsersOutline />
                      {/* <ion-icon name="browsers-outline"></ion-icon> */}
                    </span>
                  </div>
                  <div class="service-content">
                    <h2 class="s-title">FRONT END</h2>
                    <div class="skillsText text-center">
                      <p>HTML 5</p>
                      <p>CSS3 | SASS</p>
                      <p>JavaScript</p>
                      <p>React | Redux</p>
                    </div>
                  </div>
                </div>
              </>
            </Slide>
          </div>

          <div class="col-md-4">
            <Slide bottom>
              <>
                <div class="service-box">
                  <div class="service-ico">
                    <span class="ico-circle">
                      <IoAnalyticsOutline />
                      {/* <ion-icon name="analytics-outline"></ion-icon> */}
                    </span>
                  </div>
                  <div class="service-content">
                    <h2 class="s-title">Server</h2>
                    <div class="skillsText text-center">
                      <p>Node JS</p>
                      <p>Express JS</p>
                      <p>Python</p>
                      <p>Koa</p>
                    </div>
                  </div>
                </div>
              </>
            </Slide>
          </div>

          <div class="col-md-4">
            <Slide right>
              <>
                <div class="service-box">
                  <div class="service-ico">
                    <span class="ico-circle">
                      <IoServerOutline />
                      {/* <ion-icon name="server-outline"></ion-icon> */}
                    </span>
                  </div>
                  <div class="service-content">
                    <h2 class="s-title">DATABASE</h2>
                    <div class="skillsText text-center">
                      <p>MongoDB</p>
                      <p>PostgreSQL</p>
                      <p>mySQL</p>
                      <p>MariaDB</p>
                    </div>
                  </div>
                </div>
              </>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
