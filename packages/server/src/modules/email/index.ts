import { createTransport } from "nodemailer";

const mailer = createTransport({
  host: process.env.SMTP_HOST!,
  port: parseInt(process.env.SMTP_PORT!),
  secure: true,
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export const sendVerificationMail = async (to: string, publicId: string) => {
  await mailer.sendMail({
    from: "",
    to,
    subject: "Email Verification",
    text: `${publicId}`,
  });
};
