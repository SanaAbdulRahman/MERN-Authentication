import { transporter } from "./nodemailerConfig.js";
import dotenv from 'dotenv';
dotenv.config();
import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from '../emailTemplates/emailTemplates.js';
export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipient,
        subject: "Verify your Email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
    };
    try {
        //console.log("Sending email with options:", mailOptions);
        const info = await transporter.sendMail(mailOptions); // Send the email
        // console.log('Email sent successfully:', info.response);

    } catch (error) {
        console.error("Error sending verification email:", error);
        throw new Error(`Error sending verification email: ${error.message}`);

    }

}


export const sendWelcomeEmail = async (email, name) => {
    const recipient = email;
    const mailOptions =
    {
        from: process.env.EMAIL_USER,
        to: recipient,
        subject: "Welcome Email",
        html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", name)

    }
    try {

        // console.log("Welcome email sent successfully", mailOptions);
        const info = await transporter.sendMail(mailOptions); // Send the email
        // console.log('Welcome Email sent successfully:', info.response);

    } catch (error) {
        console.error("Error sending welcome email", error);

        throw new Error(`Error sending welcome email : ${error.message}`);

    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipient,
        subject: "Reset your Password",
        html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
        category: "Password Reset"
    }
    try {
        const info = await transporter.sendMail(mailOptions); // Send the email
        //console.log('Password reset email sent successfully:', info.response);


    } catch (error) {
        console.error(`Error sending password reset email`, error);

        throw new Error(`Error sending password reset email :${error.message}`)
    }
}
export const resetPasswordSuccessEmail = async (email) => {
    const recipient = email;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipient,
        subject: "Password reset successful",
        html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        category: "Password reset"
    }

    try {
        const info = await transporter.sendMail(mailOptions); // Send the email
        //console.log("Password reset email send successfully", info.response);
    } catch (error) {
        console.error("Error sedning password reset success email", error);
        throw new Error(`Error sending password reset success email ${error.message}`);

    }
}
