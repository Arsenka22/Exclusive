import { SaleNotification } from "../components/SaleNotification";
import { HeaderView } from "../components/Header/HeaderView";
import { Wishlist } from "../components/Wishlist/WishlistView";
import { FooterView } from "../components/Footer/FooterView";

export const WishlistPage = () => {
  return (
    <>
      <header>
        <SaleNotification />
        <HeaderView />
      </header>
      <main className="px-[calc(50%_-_585px)]">
        <Wishlist />
      </main>
      <FooterView />
    </>
  );
};
