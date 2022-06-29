import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [userCart, setCart] = useState(false)
//classname either "add" or ""
  function handleClick () {
    setCart(!userCart)
  }

  return (
    <li className={userCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleClick} className="add">{userCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
