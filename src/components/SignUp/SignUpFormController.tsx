import { useState, type FormEvent, type ChangeEvent } from "react";
import { SignUpForm } from "./SignUpFormView";

export const SignUpFormController = () => {
  const [FormData, setFormData] = useState({username: '', email: '', password: ''})

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key =  e.currentTarget.name;
    setFormData({... FormData, [key]: e.currentTarget.value})
  }
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const handleReset = () => {
    setFormData({username: '', email: '', password: ''})
  }

 
  

  return (
    <SignUpForm username={FormData.username} email={FormData.email} password={FormData.password} onChange={handleOnChange} onSubmit={handleOnSubmit} handleReset={handleReset} />
  )
}