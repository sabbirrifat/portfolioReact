import React from "react";
import bgIntro from '../assets/img/bg-intro1.png';
import {IoChevronDownOutline} from 'react-icons/io5';
import Typewriter from 'typewriter-effect';
import {Link} from 'react-scroll';

const MainBanner = () => {
  return (
    <div
      id="home"
      class="intro route bg-image"
      style={{ backgroundImage: `url(${bgIntro})`}}
      
    >
      <div class="overlay-itro"></div>
      <div class="intro-content display-table">
        <div class="table-cell">
          <div class="container">
            <h1 class="intro-title mb-4">Hi, I'm Sabbir Rifat</h1>
            <p class="intro-subtitle">
            <Typewriter
                options={{
                  strings: ['Frontend Engineer', 'Web Application Developer', 'React Developer'],
                  autoStart: true,
                  delay: 50,
                  loop: true,
                }}
                />
              <span class="text-slider-items">
               
                
              </span>
              <strong class="text-slider"></strong>
            </p>
            <Link
              to="about"
              smooth={true}
              class="headerButtonStyle btn js-scroll"
              role="button"
            >
              Learn More{" "}
              <IoChevronDownOutline className="buttonUpArrow" />
              {/* <ion-icon
                name="chevron-down-outline"
                class="buttonUpArrow"
              ></ion-icon> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
