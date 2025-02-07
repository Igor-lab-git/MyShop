import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { CartItem } from "../../../types/index";
import { CartItemComponent } from "../../../components/CartItemComponent/index";
import style from "./style.module.scss";

export const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className={style.wrapperShop}>
      <h1 className={style.titleShope}>Карзина покупок</h1>
      {cartItems.length === 0 && (
        <p className={style.cartIsEmpty}>Ваша карзина пустая</p>
      )}
      {cartItems.length && (
        <>
          <ul className={style.cartList}>
            {cartItems.map((item: CartItem) => (
              <CartItemComponent key={item.product.id} item={item} />
            ))}
          </ul>
          <div className={style.wrapperCalculate}>
            <h3 className={style.titleCalculate}>Итоговая сумма</h3>
            <span className={style.calculateCount}>${calculateTotal()}</span>
          </div>
        </>
      )}
    </div>
  );
};
