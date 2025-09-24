import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/send-email', (req, res) => {
  const { email, tel, username, message } = req.body;

  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject: 'New Contact Form Submission',
    text: `
      Email: ${email}
      Name: ${username}
      Phone: ${tel}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});