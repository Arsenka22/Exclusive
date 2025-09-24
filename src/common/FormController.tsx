import { useState, type FormEvent, type ChangeEvent } from "react";
import { FormView } from "./FormView";
import { sendMail } from "../api/email";

export const FormController = () => {
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    setFormData({ ...FormData, [key]: e.currentTarget.value });
  };
  
  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const key = e.currentTarget.name;
    setFormData({ ...FormData, [key]: e.currentTarget.value });
  };
  
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendMail(
        FormData.username,
        FormData.email,
        FormData.tel,
        FormData.message
      );
      alert("Сообщение отправлено!");
      handleReset();
    } catch (error) {
      alert("Ошибка отправки! Проверьте введенные данные.");
    }
  };
  
  const handleReset = () => {
    setFormData({ username: "", email: "", tel: "", message: "" });
  };

  return (
    <FormView
      username={FormData.username}
      email={FormData.email}
      message={FormData.message}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      tel={FormData.tel}
      handleReset={handleReset}
      onChangeMessage={onChangeMessage}
    />
  );
};