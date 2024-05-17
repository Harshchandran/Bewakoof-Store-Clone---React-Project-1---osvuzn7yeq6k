import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CampaignMen from "../components/homePageChilds/MenSubNavigations/Men";
import "../components/styles/App.css";
import { Footer } from "./footer/Footer";
import { PlusSize } from "./homePageChilds/PlusSizeSubNavigations/PlusSize";
import CampaignWomen from "./homePageChilds/WomenSubNavigations/Women";
import { IndividualCategoryProducts } from "./individualCategoryProductsPage/IndividualCategoryProducts";
import NavigationMenu from "./navigationMenu/NavigationMenu";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/cart/Cart";
import { PaymentPage } from "./pages/cart/payment/PaymentPage";
import { LoginPage } from "./pages/loginSignUp/LoginPage/LoginPage";
import Login from "./pages/loginSignUp/login/Login";
import { OrderHistory } from "./pages/orderHistory/OrderHistory";
import { IndividualOrderCard } from "./pages/orderHistory/individualOrderCard/IndividualOrderCard";
import Wishlist from "./pages/wishList/Wishlist";
import { ProductCard } from "./productCard/ProductCard";
import { ScrollToTop } from "./scrollToTop/ScrollToTop";

function App() {
  const [noOfItemsInCart, setNoOfItemsInCart] = useState("");

  const updateCartItemNumber = () => {
    if (localStorage.getItem("cartItemsNumber")) {
      const ItemsInCart = JSON.parse(localStorage.getItem("cartItemsNumber"));
      setNoOfItemsInCart(ItemsInCart);
    }
  };

  const pagePath = useLocation();

  return (
    <>
      <div className="marginHandler"></div>
      <NavigationMenu
        noOfItemsInCart={noOfItemsInCart}
        setNoOfItemsInCart={setNoOfItemsInCart}
      />
      <ScrollToTop />

      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="campaign/mens-home" element={<CampaignMen />} />
          <Route path="campaign/womens-home" element={<CampaignWomen />} />
          <Route path="/campaign/plus-size-store" element={<PlusSize />} />
          <Route path="/login/email" element={<LoginPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route
          path="/wishlist"
          element={<Wishlist updateCartItemNumber={updateCartItemNumber} />}
        />
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
      </Routes>

      {pagePath.pathname === "/cart" ? null : <Footer />}
    </>
  );
}

export default App;
