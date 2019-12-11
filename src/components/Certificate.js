import React from "react";
import certificate_img from '../img/certificate_kodilla2019.jpg'

export class Certificate extends React.Component {
  render() {
    return <div class=" col-8 col-m-12 example">
      <img src={certificate_img} alt="certificate" class=" mycertificate1" />
    </div>
  }
}
