import React from "react";
import { NavLink } from "react-router-dom";

import { Home } from "../Home";
import { Root } from "../Root";

import "./header.css";
import "./left_user.css";
import avatar from '../../img/my_img_site.jpg'


export const Header = props => {
  return (

    <div class="row">
      <nav>
        <div class="col-4 example example1">
        <img src={avatar} alt="avatar image" class="avatar"/>
          <h1>Martin Hartman</h1>
          <a class="web_dev">Junior Web Developer</a>
          </div>
        <div class="col-6 example example2">
          <NavLink exact to="/" activeClassName="active">
            ABOUT ME
        </NavLink>
          <NavLink exact to="/home" activeClassName="active">
            MY PROJECTS
        </NavLink>
        </div>
      </nav>
    </div>

  );
};
