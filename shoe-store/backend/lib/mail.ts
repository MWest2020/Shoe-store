import { createTransport, getTestMessageUrl } from "nodemailer";

const transporter = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function composeEmail(text: string) {
  return `
    <div className="email "style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    font-size: 20px;
    line-height: 2;
    "><
        <h2>Hello There!</h2>
        <p>${text}</p>
        <P>Mark from Westerweel Works</P>
    /div>`;
}

export interface Envelope {
  from: string;
  to?: string[] | null;
}
export interface mailResponse {
  accepted?: string[] | null;
  rejected?: string[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envellope: Envelope;
  messageId: string;
}

export async function sendPasswordResetEmail(
  resetToken: string,
  to: string
): Promise<void> {
  // email the user a token
  const info = (await transporter.sendMail({
    to,
    from: "test@example.com",
    subject: "Your password reset token",
    html: composeEmail(`Your password reset token in here!
    
        <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Your password link</a>`),
  })) as mailResponse;
  if (process.env.MAIL_USER.includes("ethereal.email")) {
    console.log(`💌 Message Sent!  Preview it at ${getTestMessageUrl(info)}`);
  }
}
