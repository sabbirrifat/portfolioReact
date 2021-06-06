import React from "react";
import Fade from "react-reveal/Fade";


const Card = ({ img, title, demoUrl, sourceCodeUrl, skills }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <Fade bottom>
        <>
      <div className="projectCard">
        <div className="face front">
          <div className="card cardStyle">
            <img className="card-img-top" src={img} alt="Card image cap" />

            <div className="card-body text-center">
              <h4 className="card-title">{title}</h4>

              <ul class="list-unstyled text-center">
                {skills.map((item, key) => {
                  if (key === skills.length - 1) {
                    if (skills.length === 3) {
                      return (
                        <li
                          className="card-text"
                          key={key}
                          style={{ borderBottom: "none", marginBottom: "50px" }}
                        >
                          {item}
                        </li>
                      );
                    } else {
                      return (
                        <li
                          className="card-text"
                          key={key}
                          style={{ borderBottom: "none" }}
                        >
                          {item}
                        </li>
                      );
                    }
                  }

                  return (
                    <li className="card-text" key={key}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="face back serizeiback">
          <div className="d-flex flex-column flex-wrap">
            <a
              href={demoUrl}
              target="_blank"
              className="cardButton"
              style={{ marginBottom: "30px" }}
            >
              Demo
            </a>
            <a href={sourceCodeUrl} target="_blank" className="cardButton">
              Source Code
            </a>
          </div>
        </div>
      </div>
      </>
      </Fade>
    </div>
  );
};

export default Card;
