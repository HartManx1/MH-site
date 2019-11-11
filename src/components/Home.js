import React from "react";
import "./Home.css";

import project1 from '../img_portfolio/project1.PNG'
import project2 from '../img_portfolio/project2.PNG'

export class Home extends React.Component {
  render() {
    return <div class=" col-8 example ">
      <div class="row ">
        <div class="col-8 portfolio">
          <a href="https://project-118403.kodilla.com/" target="_blank">
            <img src={project1} alt="company site" class="certificate project_img" />
          </a>
        </div>
        <div class="col-4 ">
          <div class="discription_font"><h2>Name of project:</h2></div>
          <div class="discription_color">
            <a class="a_floor" href="https://project-118403.kodilla.com/" target="_blank">
              <h2 class="h2_link">Company site</h2>
            </a>
          </div>
          <div class="discription discription_dis"><h2>Discription:<a> full customizable company site</a></h2></div>
          <div class="discription_font"><h2>Technologies:</h2>
            <ul>
              <li>
                <a>HTML</a>
              </li>
              <li>
                <a>CSS</a>
              </li>
              <li>
                <a>+ Mobile compability</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-8 portfolio portfolio_marg ">
          <a class="a_floor" href="https://hartmanx1.github.io/zadanie-15.6/" target="_blank">
            <img src={project2} alt="kanban" class="certificate project_img" />
          </a>
        </div>
        <div class="col-4 discription_marg ">
          <div class="discription_font"><h2>Name of project:</h2></div>
          <a class="a_floor" href="https://hartmanx1.github.io/zadanie-15.6/" target="_blank">
              <h2 class="h2_link">Kanban board</h2>
            </a>
          <div class="discription discription_dis"><h2>Discription:<a> lean method to manage and improve work across human systems</a></h2></div>
          <div class="discription_font"><h2>Technologies:</h2>
            <ul>
              <li>
                <a>HTML</a>
              </li>
              <li>
                <a>CSS</a>
              </li>
              <li>
                <a>JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
      </div>



    </div>



  }
}
