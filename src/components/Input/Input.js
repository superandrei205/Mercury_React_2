import React,{useContext} from "react";

import "./Input.css";
import cn from 'classnames';
import {MyContext} from '../../App.js'

const Input = ({className }) => {
    const {onChange , value} = useContext(MyContext);
  return (
    <input
        onChange={onChange}
        className={cn('input', className)}
        type="text"
        placeholder="Search"
        value={value}
      />
  );
};

export default Input;
