import React from "react";

import "./ItemMessage.css";
import { controlClassName } from "../../helper.js";

const ItemMessage = ({ title, body, className }) => {
  return (
    <li className={`item ${controlClassName(className)}`}>
      <div className="item__container__logo">
        <div className="item__logo logo ">
          <div className="logo__online online"></div>
        </div>
      </div>
      <div className="item__container__message">
        <div className="item__container-name-and-date">
          <a className="item__name" href="#">
            {title}
          </a>
          <span className="item__date">11:20 AM</span>
        </div>
        <p className="item__text ">{body}</p>
      </div>
    </li>
  );
};

export default ItemMessage;
