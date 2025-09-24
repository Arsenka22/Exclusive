import { HeaderView } from "../components/Header/HeaderView";
import { SaleNotification } from "../components/SaleNotification";
import { FooterView } from "../components/Footer/FooterView";
import { LoginFormController } from "../components/Login/LoginFormController";

export const LoginPage = () => {
  return (
    <>
      <header>
        <SaleNotification />
        <HeaderView />
      </header>
      <main className="max-w-[1170px] mx-auto">
        <LoginFormController />
      </main>
      <footer>
        <FooterView />
      </footer>
    </>
  );
};
