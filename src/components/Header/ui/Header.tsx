import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import Cart from "../../../../public/icons/Cart.svg";
import style from "./style.module.scss";



export const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className={style.header}>
      <Link to="/" className={style.myStor}>
        Мой магазин
      </Link>
      <nav>
        <Link to="/cart">
          <div className={style.wrapperCart}>
            <img className={style.cartImg} src={Cart} alt="" />
            <span className={style.cartCount}>{cartCount}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};
