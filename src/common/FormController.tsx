import { useState, type FormEvent, type ChangeEvent } from "react";
import { FormView } from "./FormView";

export const FormController = () => {
  const [FormData, setFormData] = useState({username: '', email: '', tel: '', message: ''})

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key =  e.currentTarget.name;
    setFormData({... FormData, [key]: e.currentTarget.value})
  }
  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const key =  e.currentTarget.name;
    setFormData({... FormData, [key]: e.currentTarget.value})
  }
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const handleReset = () => {
    setFormData({username: '', email: '', tel: '', message: ''})
  }

 
  

  return (
    <FormView username={FormData.username} email={FormData.email} message={FormData.message}  onChange={handleOnChange} onSubmit={handleOnSubmit} tel={FormData.tel} handleReset={handleReset} onChangeMessage={onChangeMessage} />
  )
}