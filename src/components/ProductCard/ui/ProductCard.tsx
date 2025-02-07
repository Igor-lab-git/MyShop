import { FC } from "react";
import { Product } from "../../../types/index";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/ui/cartSlice";
import style from "./style.module.scss";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }: Props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product, quantity: 1 }));
  };

  return (
    <div className={style.wrapperCard}>
      <img
        className={style.imgCart}
        src={product.imageUrl}
        alt={product.title}
      />
      <h3 className={style.titleCard}>{product.title}</h3>
      <p className={style.descriptionText}>{product.description}</p>
      <p className={style.price}>Price: ${product.price}</p>
      <button className={style.button} onClick={addToCart}>
        Добавить в карзину
      </button>
    </div>
  );
};
