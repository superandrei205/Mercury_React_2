import React from "react";

import SearchForm from "../SearchForm/SearchForm.js";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container-title-and-counter">
        <h1 className="header__title">Messages</h1>
        <div className="header__message-counter">137</div>
      </div>
      <SearchForm
        className="header__search-form"
      />
    </header>
  );
};

export default Header;
