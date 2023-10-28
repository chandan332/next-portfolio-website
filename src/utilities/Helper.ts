import { Transporter, createTransport } from "nodemailer";

/**
 * Sends an email using Nodemailer library.
 * @param name - The name of the sender.
 * @param email - The email address of the sender.
 * @param message - The content of the email message.
 */
export async function sendMail(name: string, email: string, message: string) {
  console.log("Sending email...");

  try {
    // Create a transporter object using the createTransport function from the Nodemailer library.
    const transporter: Transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: "roysiddhart332@gmail.com",
      subject: "Client Message",
      html: `<h1>My name is ${name}</h1>
            <p>${email}</p>
            <p>${message}</p>
    `,
    };

    // Use the transporter to send an email with the provided information.
    const info = await transporter.sendMail(mailOptions);

    // Log the message ID to the console.
    console.log("Email sent successfully. Message ID:", info.messageId);
  } catch (error) {
    // Handle any errors that occur during sending the email.
    console.error("Error sending email:", error);
  }
}
