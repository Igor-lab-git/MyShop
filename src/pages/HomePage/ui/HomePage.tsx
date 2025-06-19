import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../../features/ui/productsSlice";
import { AppDispatch, RootState } from "../../../features/store";
import { ProductCard } from "../../../components/ProductCard/index";
import { Product } from "../../../types";
import { useEffect, useState } from "react";
import style from "./style.module.scss";
import ImageSlider from "../../../components/BannerSlider/ui/ImageSlider";
import homeBaner from "../../../../public/img/homePage/homeBaner.png";
import homeBanner_2 from "../../../../public/img/homePage/homeBanner_2.png"
import homeBanner_3 from "../../../../public/img/homePage/homeBanner_3.png"
import homeBanner_4 from "../../../../public/img/homePage/homeBanner_4.png"
import homeBanner_5 from "../../../../public/img/homePage/homeBanner_5.png"
import { SearchBar } from "../../../components/SearchBarProps/indwx";

const ITEMS_PER_PAGE = 16;

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedBrand, setSelectedBrand] = useState<string>('Все');

  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductsAsync() as ReturnType<typeof fetchProductsAsync>);
  }, [dispatch]);


const brands = ["Все", ...new Set(products.map(p => p.brand))]
  
  const handleBrandClick = (brand: string) => {
    setSelectedBrand(brand);
  };

  const filteredProducts = products.filter((product) => {
    const matchesBrand = selectedBrand === 'Все' || product.brand === selectedBrand;
    const matchesName = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBrand && matchesName;
  });
  console.log(products);
  

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredProducts.length));
  };

  if (loading) return <p>Загрузка товаров...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
        <ImageSlider />
      <div className={style.wrapperHomePage}>
      <div className={style.inputWrapper}>
      <SearchBar
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          onReset={() => setSearchTerm("")}
        />
      </div> 
      <div className={style.wrapperBrandFilter}>
      {brands.map((brand) => (
          <button
            onClick={() => handleBrandClick(brand)}
            className={`${style.brand} ${selectedBrand === brand ? style.brandActive : ''}`}>
            {brand}
          </button>
        ))}
      </div>
        <img className={style.homeBaner} src={homeBaner} alt="homeBaner" />

        <section className={style.wrapperCard}>
          <div className={style.wrapperImg}>
            <img className={style.homeBanner_2} src={homeBanner_2} alt="homeBanner_2" />
            <img className={style.homeBanner_2} src={homeBanner_3} alt="homeBanner_3" />
            <img className={style.homeBanner_2} src={homeBanner_4} alt="homeBanner_4" />
            <img className={style.homeBanner_2} src={homeBanner_5} alt="homeBanner_5" />
          </div>
          <div className={style.cardsWrapper}>
          {filteredProducts.length === 0 && (
            <div>
              <h2 className={style.titleSerchNot}>Такого товар нет 😕</h2>
            </div>
          )}
          {visibleProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </section>
        <div className={style.wrapperBtnShowMore}>
        {visibleCount < filteredProducts.length && (
          <button className={style.btnShowMore} onClick={handleLoadMore} style={{ marginTop: 20 }}>
            Показать ещё
          </button>
        )}
        </div>
      </div>
    </>
  );
};
