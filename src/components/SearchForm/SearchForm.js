import React from "react";

import { controlClassName } from "../../helper.js";

import "./SearchForm.css";

const SearchForm = ({ onChange, onSubmit, value, className }) => {
  return (
    <form
      onSubmit={onSubmit}
      id="search"
      className={`search-form ${controlClassName(className)}`}
      action="#"
    >
      <input
        onChange={onChange}
        className="search-form__input input"
        type="text"
        placeholder="Search"
        value={value}
      />
      <button className="search-form__button button" form="search"></button>
    </form>
  );
};

export default SearchForm;
