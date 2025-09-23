import { useState, type FormEvent, type ChangeEvent } from "react";
import { SignUpForm } from "./SignUpFormView";
import { register } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const SignUpFormController = () => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({username: '', email: '', password: ''})

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key =  e.currentTarget.name;
    setFormData({... FormData, [key]: e.currentTarget.value})
  }
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
    e.preventDefault();
    const response = await register(FormData.username, FormData.email, FormData.password);
    navigate("/activation");
    console.log(response);
  }
  catch (error) {
    alert("Ошибка регистрации! Проверьте введенные данные.");
  }
  };
  const handleReset = () => {
    setFormData({username: '', email: '', password: ''})
  }

 
  

  return (
    <SignUpForm username={FormData.username} email={FormData.email} password={FormData.password} onChange={handleOnChange} onSubmit={handleOnSubmit} handleReset={handleReset} />
  )
}