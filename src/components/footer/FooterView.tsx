import qr from "../../assets/Qr Code.png";
import gplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";
import facebookicon from "../../assets/facebookicon.svg";
import twittericon from "../../assets/twittericon.svg";
import instagramicon from "../../assets/insticon.svg";
import lindkedin from "../../assets/linkedinicon.svg";
import { useState } from "react";

export const FooterView = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Показываем уведомление
    setShowNotification(true);

    // Автоматически скрываем уведомление через 3 секунды
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="footer w-full bg-black text-white mt-[147px] py-8">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-center items-start gap-5 md:gap-12 lg:gap-[50px] xl:gap-[50px] w-full">
          <div className="flex flex-col gap-4 min-w-[200px] flex-1 md:flex-grow-0 md:text-center lg:text-left">
            <h3 className="text-lg font-bold">Exclusive</h3>
            <p className="text-sm text-gray-300">Subscribe</p>
            <p className="text-sm text-gray-300">
              Get 10% off your first order
            </p>
            <div className="flex flex-col gap-2 max-w-xs md:mx-auto lg:mx-0">
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 bg-gray-800 rounded text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black py-2 px-4 rounded text-sm font-medium hover:bg-gray-100 transition-colors w-full"
                >
                  Subscribe
                </button>

                {/* Уведомление о благодарности */}
                {showNotification && (
                  <div className="mt-2 p-2 bg-green-600 text-white text-sm rounded text-center animate-fadeIn">
                    Thank you for subscribing!
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-4 min-w-[180px] flex-1 md:flex-grow-0 md:text-center lg:text-left">
            <h3 className="text-lg font-bold">Support</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm text-gray-300">exclusive@gmail.com</p>
            <p className="text-sm text-gray-300">+88015-8888-9999</p>
          </div>

          <div className="flex flex-col gap-4 min-w-[150px] flex-1 md:flex-grow-0 md:text-center lg:text-left">
            <h3 className="text-lg font-bold">Account</h3>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              My Account
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Login / Register
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Cart
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Wishlist
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Shop
            </a>
          </div>

          <div className="flex flex-col gap-4 min-w-[150px] flex-1 md:flex-grow-0 md:text-center lg:text-left">
            <h3 className="text-lg font-bold">Quick Link</h3>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-4 min-w-[220px] flex-1 md:flex-grow-0 md:text-center lg:text-left">
            <h3 className="text-lg font-bold">Download App</h3>
            <p className="text-sm text-gray-300">
              Save $3 with App New User Only
            </p>

            <div className="flex items-start gap-3 justify-center md:justify-start lg:justify-start">
              <img
                src={qr}
                alt="QR Code"
                className="w-14 h-14 md:w-16 md:h-16 object-contain flex-shrink-0"
              />
              <div className="flex flex-col gap-2">
                <img
                  src={gplay}
                  alt="Google Play"
                  className="w-20 h-7 md:w-24 md:h-8 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img
                  src={appstore}
                  alt="App Store"
                  className="w-20 h-7 md:w-24 md:h-8 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <h4 className="text-sm font-medium text-center md:text-left lg:text-left">
                Follow Us
              </h4>
              <div className="flex gap-2 justify-center md:justify-start lg:justify-start">
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
                >
                  <img
                    src={facebookicon}
                    alt="Facebook"
                    className="w-4 h-4 object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
                >
                  <img
                    src={twittericon}
                    alt="Twitter"
                    className="w-4 h-4 object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
                >
                  <img
                    src={instagramicon}
                    alt="Instagram"
                    className="w-4 h-4 object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
                >
                  <img
                    src={lindkedin}
                    alt="LinkedIn"
                    className="w-4 h-4 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Exclusive. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
