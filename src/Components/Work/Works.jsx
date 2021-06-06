import React from "react";
import { cardsData } from "../../Utils/projectCardData";
import Card from "./Card";

const Works = () => {
  return (
    <section class="work" id="work">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">Projects</h3>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row projectCardStyle">
          {cardsData.map((item) => (
            <Card
              img={item.img}
              title={item.title}
              skills={item.skills}
              demoUrl={item.demoUrl}
              sourceCodeUrl={item.sourceCodeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
