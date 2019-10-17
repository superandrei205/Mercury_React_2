import React from "react";

import SearchForm from '../SearchForm/SearchForm.js';

import "./Header.css";

const Header=({ onSubmit, onChange, value })=>{
  return (
    
      <header className="header">
        <div className="header__container-title-and-counter">
        <h1 className="header__title title">Messages</h1>
        <div className="header__message-counter message-counter">137</div>
        </div>
        <SearchForm className='header__search-form' onSubmit={onSubmit} onChange={onChange} value={value}/>
      </header>
    
  );
}

export default Header;
