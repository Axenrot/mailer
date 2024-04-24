import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface IncomingData {
  email: string;
  name: string;
  phone?: string;
  text: string;
  address?: string;
  title?: string;
  country?: string;
}

export async function POST(request: Request) {
  const data = (await request.json()) as IncomingData;

  const { email, name, phone, address, title, country, text } = data;

  const transporter = nodemailer.createTransport({
    headers: { "Content-Type": "application/json" },
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let message = `Hello i'm ${name} from ${country && country} ${
    address && address
  } ${title ? `I'm a ${title} ` : ""}${
    text ? `and I wanna talk about this: ${text}.` : ""
  } Regards, ${name}. Here's my contact for you: ${email} ${phone} `;

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.RECEIVER_EMAIL_ADDRESS,
    subject: `CONTACT: ${name || "*Não informado*"}`,
    text: `${message || "*Não informado*"}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: "Email sent succesfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
