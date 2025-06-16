import React from "react";
import { CartItem } from "../../../types/index";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../../../features/ui/cartSlice";
import style from "./style.module.scss";
import deleteCart from "../../../../public/icons/deleteCart.svg"

interface Props {
  item: CartItem;
}

export const CartItemComponent: React.FC<Props> = ({ item }) => {

  const dispatch = useDispatch();
   const image = item.product.imageUrl.slice(0, 200).toString();

  const productIncrease = () => {
    dispatch(
      updateQuantity({
        productId: item.product.id,
        quantity: item.quantity + 1,
      })
    );
  };
  const productDecrease = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          productId: item.product.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  
  const remove = () => {
    dispatch(removeItem(item.product.id));
  };
  
 
  return (
    <li className={style.listWrapper} key={item.product.id}>
      <img
        className={style.imgCart}
        src={image}
        alt={item.product.title}
      />
      <div className={style.contentWrapper}>
        <p className={style.priceCart}>Цена: {item.product.price} ₽</p>
        <p className={style.titleCount}>
          Итого: {item.product.price * item.quantity} ₽
        </p>
        
        <div className={style.wrapperButtonsCuonter}>
        <div className={style.wrapperButton}>
          <button className={style.btnCounter} onClick={productDecrease}>
            -
          </button>
          <span className={style.count}>{item.quantity}</span>
          <button className={style.btnCounter} onClick={productIncrease}>
            +
          </button>
        </div>
        <button  onClick={remove}>
          <img className={style.buttonRemove} src={deleteCart} alt="deleteCart" />
        </button>
        </div>
      </div>
    </li>
  );
};
