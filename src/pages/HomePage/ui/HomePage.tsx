import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../../features/ui/productsSlice";
import { RootState } from "../../../features/store";
import { ProductCard } from "../../../components/ProductCard/index";
import { Product } from "../../../types/index";
import { useEffect } from "react";
import style from "./style.module.scss";

export const HomePage = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductsAsync() as any);
  }, [dispatch]);

  if (loading) {
    return <p>Загрузка товаров...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={style.wrapperHomePage}>
      <h1 className={style.title}>Домашняя страница</h1>
      <div className={style.wrapperCard}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
