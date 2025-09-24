import signupimg from "../../assets/signupimg.png";
import signupwithgoogle from "../../assets/Icon-Google.svg";
import { type FormEvent } from "react";
import { Link } from "react-router-dom";

type Props = {
  username: string;
  email: string;
  password: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleReset: () => void;
};

export const SignUpForm = ({
  username,
  email,
  password,
  onChange,
  onSubmit,
  handleReset,
}: Props) => {
  return (
    <div className="max-w-full w-full flex justify-between items-center gap-[120px] mt-15 ">
      <img
        src={signupimg}
        alt="signup"
        className="max-w-[805px] w-full max-h-[781px] h-full"
      ></img>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={onSubmit}
      >
        <div className="w-full flex flex-col justify-start items-start   ">
          <h1 className="w-full text-[32px] font-bold leading-[48px] tracking-[-0.02em] text-[#2A2A2A]">
            Create an account
          </h1>
          <p>Enter your details below</p>
        </div>

        <input
          type="text"
          placeholder="Name"
          name="username" // Добавлено
          className="w-[420px] h-[56px] bg-[#F3F3F3] rounded-[8px] mt-[20px] px-4"
          value={username}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email" // Добавлено
          className="w-[420px] h-[56px] bg-[#F3F3F3] rounded-[8px] mt-[20px] px-4"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password" // Добавлено
          className="w-[420px] h-[56px] bg-[#F3F3F3] rounded-[8px] mt-[20px] px-4"
          value={password}
          onChange={onChange}
        />
        <button className="flex justify-center items-center cursor-pointer w-[420px] h-[56px] bg-red-600 rounded-[8px] mt-[20px] text-white">
          Create account
        </button>
        <button className="flex justify-center items-center cursor-pointer w-[420px] h-[56px] bg-[#F3F3F3] rounded-[8px] mt-[20px]">
          <div className="btn-container flex justufy-between items-center gap-2">
            <img
              src={signupwithgoogle}
              alt="signupwithgoogle"
              className="w-[24px] h-[24px]"
            ></img>
            <span>Sign Up with Google</span>
          </div>
        </button>
        <div className="flex justify-center items-center mt-[20px] gap-2">
          <span>Already have an account?</span>
          <Link to="/login">
            <button className="underline" onClick={handleReset}>
              Log In
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
