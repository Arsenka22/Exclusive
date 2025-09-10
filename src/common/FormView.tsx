import { type FormEvent } from "react";
import { useState } from "react";

type Props = {
  username: string;
  email: string;
  tel: string;
  message: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleReset: () => void;
  onChangeMessage: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const FormView = ({
  username,
  email,
  message,
  tel,
  onChange,
  onSubmit,
  handleReset,
  onChangeMessage,
}: Props) => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      handleReset(); 
    }, 1000);
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full">
      <div className="flex flex-col gap-6 w-full h-[510px] rounded-lg shadow-lg p-6 md:p-8 bg-white">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={onChange}
            className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
          <input
            type="tel"
            name="tel"
            placeholder="Phone Number"
            value={tel}
            onChange={onChange}
            className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>

        <textarea
          name="message"
          value={message}
          onChange={onChangeMessage}
          placeholder="Your message..."
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors min-h-[207px] resize-vertical"
        ></textarea>

        <button
          type="submit"
          className="bg-red-500 text-white max-w-[215px] w-full py-3 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors self-end font-medium"
        >
          Send Message
        </button>

        {submitted && (
          <p className="text-green-500">Form submitted successfully!</p>
        )}
      </div>
    </form>
  );
};
