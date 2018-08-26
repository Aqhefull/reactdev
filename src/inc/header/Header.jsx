import React, { Component } from "react";

import logo from "./../../logo.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <h1 className="app__title">
          Welcome to React ( Alex Komarevich Boilerplate){" "}
        </h1>
      </header>
    )
  }}
