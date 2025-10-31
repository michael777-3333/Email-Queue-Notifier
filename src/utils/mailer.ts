import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(to: string, subject: string, html: string) {
  const info = await transporter.sendMail({
    from: `"Mi App 🚀" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });

  console.log('📩 Email enviado:', info.messageId);
}
