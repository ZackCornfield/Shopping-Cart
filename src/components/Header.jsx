import React from 'react';
import Nav from './utils/Nav';
import Logo from '../assets/logo.svg?react';
import Cart from '../assets/cart.svg?react';
import Magnify from '../assets/magnify.svg?react';

const Header = ({ toggleCart, cartItems }) => {
  const computeItemsAmount = () => {
    // Default to 0 if cartItems is empty or undefined
    if (!Array.isArray(cartItems) || cartItems.length === 0) return 0;

    return cartItems.reduce((currentAmount, item) => {
      const itemAmount = parseInt(item.amount, 10);
      return currentAmount + (isNaN(itemAmount) ? 0 : itemAmount);
    }, 0);
  };

  return (
    <header>
      <div className="container">
        <Logo className="icon" />
        <h1 className="title">SneakPeak</h1>
      </div>
      <Nav />
      <div className="container gap">
        <div className="cart-icon" onClick={toggleCart}>
          <Cart className="icon" />
          <div className="cart-amount">{computeItemsAmount()}</div>
        </div>
        <Magnify className="icon" />
        <button className="btn">Log in</button>
      </div>
    </header>
  );
};

export default Header;
