import React from "react";
import { NavLink } from "react-router-dom";

import { Home } from "../Home";
import { Root } from "../Root";

import "./header.css";
import "./left_user.css";
import avatar from '../../img/avatar.jpg'


export const Header = props => {
  return (

    <div class="row">
      <nav>
        <div class="col-3 example example1">
          <img src={avatar} alt="avatar image" class="avatar" />
          <h1>Martin Hartman</h1>
          <a class="web_dev">Junior Web Developer</a>
          <div class="location">
            <i class="fas fa-map-marker-alt"></i>
            <span>Wrocław</span>
            <div class="location">
              <a class="linkedin" href="https://www.linkedin.com/in/martin-hartman-60a0b3189/" title="My Linkedin" target="_blank"><i class="fab fa-linkedin"></i>Linkedin</a>
            </div>
            <div class="location">
              <a class="linkedin " href="https://www.linkedin.com/in/martin-hartman-60a0b3189/" title="My Linkedin" target="_blank"><i class="fab fa-github-square"></i>GitHub</a>
            </div>
            <div class="location git">
              <a class="linkedin">Email:</a><br></br>
              <a class="email" href="mailto:webmaster@example.com">hartmanx1@wp.pl</a>
              <a class="cv" href="CV/CV.pdf" download="Martin_Hartman_CV.pdf">
                        <p class="button">Download CV</p>
                    </a>
            </div>
          </div>

        </div>
        <div class="col-8 example example2">
          <NavLink exact to="/" activeClassName="active">
            ABOUT ME
        </NavLink>
          <NavLink exact to="/home" activeClassName="active">
            PORTFOLIO
        </NavLink>
          <NavLink exact to="/certificate" activeClassName="active">
            MY CERTIFICATE
        </NavLink>
          <NavLink exact to="/technologies" activeClassName="active">
            TECHNOLOGIES
        </NavLink>
        </div>
      </nav>
    </div>

  );
};
