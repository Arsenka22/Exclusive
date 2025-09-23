import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { activateAccount } from "../api/auth";
import signupimg from "../assets/signupimg.png";

export const ActivationPage = () => {
  const [uid, setUid] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await activateAccount(uid, token);
      navigate("/");
    } catch (error) {
      alert("Активация выполнена с ошибкой, пожалуйста повторите");
    }
  };

  return (
    <div className="px-[calc(50%_-_585px)] mx-auto max-w-full mt-40">
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
            Activate your account
          </h1>
          <p>Please enter your UID and Token below</p>
        </div>

        <input
          type="text"
          placeholder="uid"
          name="uid"
          className="w-[420px] h-[56px] bg-[#F3F3F3] rounded-[8px] mt-[20px] px-4"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
        />
        <div className="relative w-[420px] mt-[20px]">
          <input
            type="text"
            placeholder="token"
            name="tokenb"
            className="w-full h-[56px] bg-[#F3F3F3] rounded-[8px] px-4"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        
        <button className="flex justify-center items-center cursor-pointer w-[420px] h-[56px] bg-red-600 rounded-[8px] mt-[20px] text-white">
          Activate
        </button>
      </form>
    </div>
    </div>
  );
};