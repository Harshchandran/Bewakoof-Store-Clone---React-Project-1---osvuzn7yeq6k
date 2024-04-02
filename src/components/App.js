import { Route, Routes, useLocation } from "react-router-dom";
import CampaignMen from "../components/homePageChilds/MenSubNavigations/Men";
import "../components/styles/App.css";
import BewakoofAir from "./homePageChilds/BewakoofAirSubNavigations/BewakoofAir";
import { PlusSize } from "./homePageChilds/PlusSizeSubNavigations/PlusSize";
import CampaignWomen from "./homePageChilds/WomenSubNavigations/Women";
import { IndividualCategoryProducts } from "./individualCategoryProductsPage/IndividualCategoryProducts";
import NavigationMenu from "./navigationMenu/NavigationMenu";
import Home from "./pages/Home";
import Men from "./pages/Men/Men";
import PageNotFound from "./pages/PageNotFound";
import Women from "./pages/Women";
import Cart from "./pages/cart/Cart";
import { LoginPage } from "./pages/loginSignUp/LoginPage/LoginPage";
import Login from "./pages/loginSignUp/login/Login";
import Wishlist from "./pages/wishList/Wishlist";
import { ProductCard } from "./productCard/ProductCard";
import { PaymentPage } from "./pages/cart/payment/PaymentPage";
import { OrderHistory } from "./pages/orderHistory/OrderHistory";
import { useState } from "react";
import { ScrollToTop } from "./scrollToTop/ScrollToTop";
import { IndividualOrderCard } from "./pages/orderHistory/individualOrderCard/IndividualOrderCard";
import { Footer } from "./footer/Footer";
import { SubFooter } from "./footer/footerSub/SubFooter";
import { FooterTextComponent } from "./footer/footerText/FooterTextComponent";

function App() {
  const [noOfItemsInCart, setNoOfItemsInCart] = useState("");

  const updateCartItemNumber = () => {
    if (localStorage.getItem("cartItemsNumber")) {
      const ItemsInCart = JSON.parse(localStorage.getItem("cartItemsNumber"));
      setNoOfItemsInCart(ItemsInCart);
    }
  };

  return (
    <>
      <div className="marginHandler"></div>
      <NavigationMenu
        noOfItemsInCart={noOfItemsInCart}
        setNoOfItemsInCart={setNoOfItemsInCart}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="campaign/mens-home" element={<CampaignMen />} />
          <Route path="campaign/womens-home" element={<CampaignWomen />} />
          <Route path="/bewakoof-air" element={<BewakoofAir />} />
          <Route path="/campaign/plus-size-store" element={<PlusSize />} />
          <Route path="/login/email" element={<LoginPage />} />
        </Route>
        <Route path="/men-clothing" element={<Men />} />
        <Route path="/women-clothing" element={<Women />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="/cart"
          element={<Cart updateCartItemNumber={updateCartItemNumber} />}
        />
        <Route path="/productPage" element={<IndividualCategoryProducts />} />
        <Route
          path="/productCard/:id"
          element={<ProductCard updateCartItemNumber={updateCartItemNumber} />}
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/orders/Individual" element={<IndividualOrderCard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
