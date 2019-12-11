import React from "react";

import "./Root.css";

export class Root extends React.Component {
  render() {
    return <div class=" col-8 col-m-12 example about_sec">
      <div class="services">

        <div class="cen">
          <div class="service">
            <i class="fas fa-anchor"></i>
            <h2>Im from</h2>
            <p>Im from Poland after high school. Now I'm studying IT in Wroclaw.</p>
          </div>

          <div class="service">
            <i class="fab fa-android"></i>
            <h2>my it freak</h2>
            <p>My first contact with technology was when I had 8 yars. It was love at first sight. Every year I was deepening my knowledge.  </p>
          </div>

          <div class="service">
            <i class="fab fa-angellist"></i>
            <h2>social skills</h2>
            <p>Apparent freak does not bother me in providing social action. I really love to work with people who I can learn a lot from.</p>
          </div>

          <div class="service">
            <i class="fas fa-apple-alt"></i>
            <h2>healthy</h2>
            <p>In a healthy body, healthy mind. This is my principle that is guided throughout my life.</p>
          </div>

          <div class="service">
            <i class="fas fa-archway"></i>
            <h2>traveling</h2>
            <p>Traveling allows me to free myself from everyday life and clear my mind.</p>
          </div>
        </div>
      </div>
    </div>

  }
}
