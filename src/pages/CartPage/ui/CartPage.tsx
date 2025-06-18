import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../features/store";
import { CartItem } from "../../../types/index";
import { CartItemComponent } from "../../../components/CartItemComponent/index";
import style from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../../../features/ui/cartSlice";

export const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };

  const clearCartPage = () => {
    dispatch(clearCart());
  };

  return (
    <div className={style.wrapperShop}>
      <div className={style.navigate}>
        <Link className={style.navigateBtn} to="/">Главная</Link>
        <span>/</span>
        <button className={style.navigateBtn} onClick={() => navigate(-1)}>Назад</button>
        <span>/</span>
        <span>Карзина</span>
      </div>
      <div>
      <div className={style.wrapperCalculate}>
        <div className={style.wrappreTitleCount}>
            <h3 className={style.titleCalculate}>Итого:</h3>
            <span className={style.calculateCount}>{calculateTotal()} ₽</span>
        </div>
            <button className={style.btnClearCartPage} onClick={clearCartPage}>Очистить корзину</button>
          </div>
      {cartItems.length === 0 && (
        <p className={style.cartIsEmpty}>Ваша карзина пустая</p>
      )}
      {cartItems.length && (
        <div className={style.wrapperCard}>
          <ul className={style.cartList}>
            {cartItems.map((item: CartItem) => (
              <CartItemComponent key={item.product.id} item={item} />
            ))}
          </ul>
          
        </div>
      )}
      </div>
    </div>
  );
};
