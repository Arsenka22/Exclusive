import { useState, type FormEvent, type ChangeEvent } from "react";
import { LoginForm } from "./LoginView";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const LoginFormController = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    setFormData({ ...formData, [key]: e.currentTarget.value });
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
    e.preventDefault();
    const response = await login(formData.email, formData.password);
    console.log(response);
    console.log("Login data:", formData);
    if (response) {
      navigate("/");
    }
  } catch (error) {
    alert("Ошибка авторизации! Проверьте введенные данные.");
  }
  };

  const handleReset = () => {
    setFormData({ email: "", password: "" });
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  return (
    <LoginForm
      email={formData.email}
      password={formData.password}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      handleReset={handleReset}
      onForgotPassword={handleForgotPassword}
    />
  );
};
