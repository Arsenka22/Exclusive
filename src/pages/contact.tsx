import { HeaderView } from "../components/Header/HeaderView";
import { SaleNotification } from "../components/SaleNotification";
import { FooterView } from "../components/footer/FooterView";
import callus from "../assets/icons-phone.svg";
import writeus from "../assets/icons-mail.svg";
import { FormController } from "../common/FormController";
export const ContactPage = () => {
  return (
    <>
      <header>
        <SaleNotification />
        <HeaderView />
      </header>
      <main>
        
        <div className="contact-container flex justify-center mx-auto gap-[30px] max-w-[1170px] w-full h-full mt-[181px] ">
          <div className="contact-info flex justify-center flex-col gap-16 pt-10 pr-[35px] pb-[51px] pl-[35px] shadow-2xl">
            <div className="call-us flex flex-col gap-4 pb-[32px] border-b-2 border-gray-300">
              <span className="flex gap-4 items-center">
                <img src={callus} alt="phone"></img>Call to Us
              </span>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="call-us flex flex-col gap-4">
              <span className="flex gap-4 items-center">
                <img src={writeus} alt="mail"></img>Write to Us
              </span>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="w-full">
            <FormController />
          </div>
        </div>
      </main>
      <footer>
        <FooterView />
      </footer>
    </>
  );
};