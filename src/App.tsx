import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/contact";
import { AboutPage } from "./pages/AboutPage";
import { WishlistProvider } from "./contexts/wishlistContext";
import { WishlistPage } from "./pages/wishlistPage";
import { CartPage } from "./pages/cartpage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { CartContextProvider } from "./contexts/cartContext";
import { ActivationPage } from "./pages/ActivationPage";
export const App = () => {
  return (
    <CartContextProvider>
      <WishlistProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/activation/" element={<ActivationPage />} />
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </CartContextProvider>
  );
};
