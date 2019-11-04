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
        <div class="col-4 example example1">
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
              <a class="linkedin" href="https://www.linkedin.com/in/martin-hartman-60a0b3189/" title="My Linkedin" target="_blank"><i class="fab fa-github-square"></i>GitHub</a>
            </div>
          </div>

        </div>
        <div class="col-6 example example2">
          <NavLink exact to="/" activeClassName="active">
            ABOUT ME
        </NavLink>
          <NavLink exact to="/home" activeClassName="active">
            PORTFOLIO
        </NavLink>
          <NavLink exact to="/certificate" activeClassName="active">
            MY CERTIFICATE
        </NavLink>
        </div>
      </nav>
    </div>

  );
};
