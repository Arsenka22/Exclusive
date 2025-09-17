import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ContactPage } from "./pages/contact";
import { AboutPage } from "./pages/about";
import { WishlistProvider } from "./contexts/wishlistContext";
import { WishlistPage } from "../src/pages/wishlistPage";
export const App = () => {
  return (
    <WishlistProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
   </Routes>
    </BrowserRouter>
    </WishlistProvider>
  );
};
