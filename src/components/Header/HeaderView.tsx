import Logo from "../../assets/Logo.svg";
import WishList from "../../assets/Wishlist.svg";
import Cart from "../../assets/Cart.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";



export const HeaderView = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const HandleOnclick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-[160px] mt-4 lg:mt-[40px] border-b-[#000000] border-b-[1px] pb-4 px-4 sm:px-6 md:px-8 lg:px-[calc(50%_-_585px)]">
      <div className="w-full lg:w-auto flex justify-between items-center">
        <img src={Logo} alt="logo" className="w-32 sm:w-40 md:w-48 lg:w-auto" />
        
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex w-full lg:w-auto`}>
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-12 w-full lg:w-auto text-center lg:text-left">
          <Link to="/" onClick={HandleOnclick}>
            <li 
              className={isActive('/') 
                ? 'font-bold text-[16px] cursor-pointer border-b-[2px] border-b-[#000000] py-2 lg:py-0' 
                : 'font-regular text-[16px] cursor-pointer py-2 lg:py-0'
              }
            >
              Home
            </li>
          </Link>
          <Link to="/contact" onClick={HandleOnclick}>
            <li 
              className={isActive('/contact') 
                ? 'font-bold text-[16px] cursor-pointer border-b-[2px] border-b-[#000000] py-2 lg:py-0' 
                : 'font-regular text-[16px] cursor-pointer py-2 lg:py-0'
              }
            >
              Contact
            </li>
          </Link>
          <Link to="/about" onClick={HandleOnclick}>
            <li 
              className={isActive('/about') 
                ? 'font-bold text-[16px] cursor-pointer border-b-[2px] border-b-[#000000] py-2 lg:py-0' 
                : 'font-regular text-[16px] cursor-pointer py-2 lg:py-0'
              }
            >
              About
            </li>
          </Link>
          <Link to="/signup" onClick={HandleOnclick}>
            <li 
              className={isActive('/signup') 
                ? 'font-bold text-[16px] cursor-pointer border-b-[2px] border-b-[#000000] py-2 lg:py-0' 
                : 'font-regular text-[16px] cursor-pointer py-2 lg:py-0'
              }
            >
              Sign up
            </li>
          </Link>
        </ul>
      </nav>

      <div className="sideHeader flex flex-col sm:flex-row gap-4 lg:gap-6 w-full lg:w-auto mt-4 lg:mt-0">
        <input 
          type="text" 
          placeholder="What are you looking for" 
          className="bg-[#F1F1F1] px-4 py-2 lg:px-[20px] lg:py-[7px] cursor-pointer w-full lg:w-auto rounded-lg"
        />
        <div className="flex justify-center gap-4 lg:gap-6">
          <Link to ="/wishlist" onClick={HandleOnclick}>
          <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <img src={WishList} alt="WishList" className="w-6 h-6 lg:w-auto lg:h-auto" />
          </button>
          </Link>
          <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <img src={Cart} alt="Cart" className="w-6 h-6 lg:w-auto lg:h-auto" />
          </button>
        </div>
      </div>
    </header>
  );
};