
import axios from "axios"

export const sendMail = async (username: string, email: string, tel: string, message: string) => {
  const response = await axios.post('http://localhost:3001/send-email', {username, email, tel, message})
  return response.data
}