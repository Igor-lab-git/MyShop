import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addItem } from "../../../features/ui/cartSlice";
import { StarRating } from "../../../components/StarRating";
import { fetchProductsAsync } from "../../../features/ui/productsSlice";
import { AppDispatch, RootState } from "../../../features/store";
import style from "./style.module.scss"
import { NewComment } from "../../../components/NewComment";
import { ProductsDetailSlider } from "../../../components/ProductsDetailSlider";


export const ProductDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  
  useEffect(() => {
    dispatch(fetchProductsAsync() as ReturnType<typeof fetchProductsAsync>);
  }, [dispatch]);

  if (loading) {
    return <p>Загрузка товаров...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

 
  const product = products.find(p => p.id === Number(id));

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem({product, quantity: 1}));
    }
  };

  return (
    <div className={style.wrapperMain}>
      <div className={style.navigate}>
        <Link className={style.navigateBtn} to="/">Главная</Link>
        <span>/</span>
        <button className={style.navigateBtn} onClick={() => navigate(-1)}>Назад</button>
        <span>/</span>
        <span>{product?.title}</span>
      </div>

      <div className={style.wrapperCardDetail}>
        <div className={style.wrapperImg}>
          <img className={style.img} src={product?.imageUrl[0]} alt={product?.title} />
          <ProductsDetailSlider images={product?.imageUrl}/>
        </div>
        <div className={style.wrapperCardContent}>
          <span className={style.title}>{product?.title}</span>
          <p className={style.textDescription}>{product?.inDetail}</p>
          <div className={style.wrapperBtn}>
          <span className={style.price}>{product?.price} ₽</span>
        <button className={style.btnAdd} onClick={handleAddToCart}>Добавить в карзину</button>
          </div>
        <StarRating />
        </div>
      </div>
        <NewComment/>
    </div>
  )
}
