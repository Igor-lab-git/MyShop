import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
//import Cart from "../../../../public/icons/Cart.svg";
import style from "./style.module.scss";
import { BurgerMenu } from "../../BurgerMenu";
import facebook from "../../../../public/icons/header/facebook.svg";
import instagram from "../../../../public/icons/header/instagram.svg";
//import cart from "../../../../public/icons/header/card.svg";
import basket from "../../../../public/icons/header/basket.svg"
import profil from "../../../../public/icons/header/profil.svg"
import logo from "../../../../public/icons/header/logo.svg"



export const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={style.headerMain}>
      <div className={style.contactsHeader}>
        <span className={style.contactsHeaderSpan}>Позвоните нам</span>
        <div className={style.contactsHeaderSpan}><a href="tel:+74951234567">+7 (495) 123-45-67</a></div>
        <div className={style.socialWrapper}>
          <a  href="#">
            <img className={style.socialIcon} src={facebook} alt="facebook" />
          </a>
          <a  href="#">
            <img className={style.socialIcon} src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    <header className={style.header}>
      <Link to="/" className={style.myStor}>
      <img src={logo} alt="logo" />
        MegaMart
      </Link>
      <BurgerMenu/>
      <div className={style.wrapperCart}>
        <Link className={style.linkCartImg} to="/cart">
        
            <img className={style.cartImg} src={basket} alt="cart" />
            <span className={style.cartCount}>{cartCount}</span>
        </Link>
        <Link to="/registrationForm">
            <img className={style.cartImg} src={profil} alt="" />
        </Link>
      </div>
    </header>
    </div>
  );
};
