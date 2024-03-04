// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "";

interface EmailTemplateProps {
  firstName: string;
  subject: string;
  message: string;
}

const EmailTemplate = ({ firstName, subject, message }: EmailTemplateProps) => (
  <div>
    <h1>{subject}</h1>
    <p>Thank you for contacting us!</p>
    <p>{message}</p>
  </div>
);

export async function POST(req: Request, res: Response) {
  // const { body } = await req.json();
  // const { email, subject, message } = body;
  // try {
  //   const data = await resend.emails.send({
  //     from: fromEmail,
  //     to: fromEmail,
  //     subject: subject,
  //     react: EmailTemplate({ firstName: "John", subject, message }),
  //   });
  //   return Response.json(data);
  // } catch (error) {
  //   return Response.json({ error });
  // }
}
