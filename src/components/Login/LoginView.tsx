import signupimg from "../../assets/signupimg.png";
import signupwithgoogle from "../../assets/Icon-Google.svg";
import { type FormEvent } from "react";
import { Link } from "react-router-dom";

type Props = {
  email: string;
  password: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleReset: () => void;
  onForgotPassword: () => void;
};

export const LoginForm = ({
  email,
  password,
  onChange,
  onSubmit,
  handleReset,
  onForgotPassword,
}: Props) => {
  return (
    <div className="max-w-full w-full flex justify-between items-center gap-[120px] mt-15">
      <img
        src={signupimg}
        alt="login"
        className="max-w-[805px] w-full max-h-[781px] h-full"
      ></img>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={onSubmit}
      >
        <div className="w-full flex flex-col justify-start items-start">
          <h1 className="w-full text-[32px] font-bold leading-[48px] tracking-[-0.02em] text-[#2A2A2A]">
            Log in to Exclusive
          </h1>
          <p>Please enter your details below</p>
        </div>

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-[420px] h-[56px] bg-[#F3F3F3] rounded-[8px] mt-[20px] px-4"
          value={email}
          onChange={onChange}
        />
        <div className="relative w-[420px] mt-[20px]">
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full h-[56px] bg-[#F3F3F3] rounded-[8px] px-4"
            value={password}
            onChange={onChange}
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 underline text-[#2A2A2A] text-sm"
            onClick={onForgotPassword}
          >
            Forgot password?
          </button>
        </div>

        <button className="flex justify-center items-center cursor-pointer w-[420px] h-[56px] bg-red-600 rounded-[8px] mt-[20px] text-white">
          Log In
        </button>

        <button
          type="button"
          className="flex justify-center items-center cursor-pointer w-[420px] h-[56px] bg-[#F3F3F3] rounded-[8px] mt-[20px]"
        >
          <div className="btn-container flex justify-between items-center gap-2">
            <img
              src={signupwithgoogle}
              alt="loginwithgoogle"
              className="w-[24px] h-[24px]"
            ></img>
            <span>Log In with Google</span>
          </div>
        </button>
        <Link to="/signup">
          <div className="flex justify-center items-center mt-[20px] gap-2">
            <span>Don't have an account?</span>
            <button type="button" className="underline" onClick={handleReset}>
              Sign Up
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};
