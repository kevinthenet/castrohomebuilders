import type { APIContext } from 'astro';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

export const prerender = false;

const apiKey = process.env.SENDGRID_API_KEY || '';
const contactFormTemplate = process.env.CONTACT_FORM_TEMPLATE_ID || '';

sgMail.setApiKey(apiKey);

export async function POST({ request }: APIContext) {
  let success = true;
  let errorMsg = {};

  try {
    const parsedBody = await request.json();

    const { name, email, message } = parsedBody;

    const msg: sgMail.MailDataRequired = {
      to: 'victor@castrohomebuilders.com',
      from: 'hello@castrohomebuilders.com',
      templateId: contactFormTemplate,
      dynamicTemplateData: {
        name,
        email_input: email, // email is a reserved template keyword in SendGrid
        message,
      },
    };

    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    errorMsg = (error as Error).message;
    success = false;
  }

  return new Response(null, {
    status: success ? 200 : 400,
    statusText: success ? 'All Good' : `Something went wrong: ${errorMsg}`,
  });
}
