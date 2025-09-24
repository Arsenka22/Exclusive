import { HeaderView } from "../components/Header/HeaderView";
import { SaleNotification } from "../components/SaleNotification";
import { FooterView } from "../components/Footer/FooterView";
import { SignUpFormController } from "../components/SignUp/SignUpFormController";

export const SignupPage = () => {
  return (
    <>
      <header>
        <SaleNotification />
        <HeaderView />
      </header>
      <main className="max-w-[1170px] mx-auto">
        <SignUpFormController />
      </main>
      <footer>
        <FooterView />
      </footer>
    </>
  );
};
