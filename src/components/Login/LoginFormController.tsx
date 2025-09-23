import { useState, type FormEvent, type ChangeEvent } from "react";
import { LoginForm } from "./LoginView";

export const LoginFormController = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    setFormData({ ...formData, [key]: e.currentTarget.value });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Логика входа
    console.log("Login data:", formData);
  };

  const handleReset = () => {
    setFormData({ email: '', password: '' });
    // Здесь можно добавить навигацию на страницу регистрации
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