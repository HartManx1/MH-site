import React from "react";
import "./Technologies.css";

import HTML from '../img_technologies/HTML.png'
import CSS from '../img_technologies/CSS.png'
import JS from '../img_technologies/JScript.png'
import GIT from '../img_technologies/GIT.png'
import github from '../img_technologies/github.png'
import RWD from '../img_technologies/RWD1.png'
import jQuery from '../img_technologies/jQuery.jpg'
import NODE from '../img_technologies/NODE.png'
import react from '../img_technologies/React.png'
import MONGO1 from '../img_technologies/MONGO1.png'
import SASS from '../img_technologies/SASS.png'
import EXPRESS from '../img_technologies/ExpressJS.png'
import BOOTSTRAP from '../img_technologies/bootstrap.png'

export class Technologies extends React.Component {
    render() {
        return <div class=" col-8 example about_sec">
            <div class="services">

                <div class="cen">
                    <div class="service">
                        <img src={HTML} alt="HTML" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={CSS} alt="CSS" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={JS} alt="JS" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={EXPRESS} alt="EXPRESS" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={GIT} alt="HTML" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={github} alt="github" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={RWD} alt="RWD" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={SASS} alt="MONGO" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={jQuery} alt="jQuery" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={NODE} alt="NODE" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={react} alt="React" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={MONGO1} alt="MONGO" class="technologies" />
                    </div>

                    <div class="service">
                        <img src={BOOTSTRAP} alt="BOOTSTRAP" class="technologies" />
                    </div>
                </div>
            </div>
        </div>

    }
}


