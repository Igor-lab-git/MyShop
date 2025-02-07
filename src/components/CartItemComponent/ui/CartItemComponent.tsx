import React from "react";
import { CartItem } from "../../../types/index";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../../../features/ui/cartSlice";
import style from "./style.module.scss";

interface Props {
  item: CartItem;
}

export const CartItemComponent: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

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
        src={item.product.imageUrl}
        alt={item.product.title}
      />
      <div className={style.contentWrapper}>
        <span className={style.titleCart}>{item.product.title}</span>
        <p className={style.priceCart}>Цена: ${item.product.price}</p>
        <div className={style.wrapperButton}>
          <button className={style.btnCounter} onClick={productDecrease}>
            -
          </button>
          <span className={style.count}>{item.quantity}</span>
          <button className={style.btnCounter} onClick={productIncrease}>
            +
          </button>
        </div>
      </div>
      <div className={style.wrapperCount}>
        <p className={style.titleCount}>
          Итого: ${item.product.price * item.quantity}
        </p>
        <button className={style.buttonRemove} onClick={remove}>
          Удалить
        </button>
      </div>
    </li>
  );
};
