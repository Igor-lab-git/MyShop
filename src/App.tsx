import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/index";
import { CartPage } from "./pages/CartPage/index";
import { Header } from "./components/Header/index";
import { Provider } from "react-redux";
import store from "./features/store";
import { Contacts } from "./pages/Contacts";
import { PolythecaPage } from "./pages/PolythecaPage";
import { ProductDetail } from "./pages/ProductDetail";
import { Footer } from "./components/Footer";
import { AboutUs } from "./pages/AboutUS";
import { RegistrationForm } from "./pages/RegistrationForm";

function App() {

  return (
    <Provider store={store}>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
                <Route path="/Contacts" element={<Contacts/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/registrationForm" element={<RegistrationForm/>}/>
                <Route path="/polytheca" element={<PolythecaPage/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
            <Footer/>
        </Router>
    </Provider>
  );
}

export default App;
