import { SaleNotification } from "../components/SaleNotification";
import { HeaderView } from "../components/Header/HeaderView";
import { Cart } from "../components/Cart/Cart";
import { FooterView } from "../components/Footer/FooterView";

export const CartPage = () => {
  return (
    <>
      <header>
        <SaleNotification />
        <HeaderView />
      </header>
      <main className="px-[calc(50%_-_585px)]">
        <Cart />
      </main>
      <FooterView />
    </>
  );
};
