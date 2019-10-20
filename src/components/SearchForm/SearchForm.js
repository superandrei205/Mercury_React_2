import React, {useContext} from "react";

import Input from '../Input/Input.js';
import SearchButton from '../SearchButton/SearchButton.js';
import "./SearchForm.css";
import cn from 'classnames';
import {MyContext} from '../../App.js'

const SearchForm = ({ className }) => {
  const {onSubmit} = useContext(MyContext);
  return (
   <form
      onSubmit={onSubmit}
      id="search"
      className= {cn('search-form', className)}
    >
      <Input className="search-form__input" />
      <SearchButton />
    </form> 
  );
};

export default SearchForm;
