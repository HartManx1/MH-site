import React from "react";

import { Header } from "./Header";

export class MainLayout extends React.Component {
  render() {
    return (
      <div className="container container_rwd">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
