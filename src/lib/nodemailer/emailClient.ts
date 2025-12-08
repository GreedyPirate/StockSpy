import nodemailer, { SendMailOptions } from "nodemailer";
import { VERIFY_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./templates";
import { V } from "node_modules/better-auth/dist/index-COnelCGa.mjs";
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_GOOGLE_USER!,
        pass: process.env.NODEMAILER_GOOGLE_PASS,
    },
});

interface WelcomeOptions {
    to: string,
    username: string,
    intro: string,
}
export const sendWelcome = async ({ to, username, intro }: WelcomeOptions) => {
    const html = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', username)
    // .replace('{{intro}}', intro); 

    const info = await transporter.sendMail({
        from: process.env.NODEMAILER_GOOGLE_USER!,
        to,
        subject: 'Welcome to Stock Spy',
        text: 'Thanks for joining us!',
        html: html
    });
    console.log('Message sent: ', JSON.stringify(info));
}

interface VerificationOptions {
    to: string,
    username: string,
    verificationLink: string,
}
export const sendVerificationEmail = async ({ to, username, verificationLink }: VerificationOptions) => {
    console.log('sending verification email to', to);
    const html = VERIFY_EMAIL_TEMPLATE
        .replace('{{name}}', username)
        .replace('{{verificationLink}}', verificationLink);
    const info = await transporter.sendMail({
        from: process.env.NODEMAILER_GOOGLE_USER!,
        to,
        subject: 'Verify your email address',
        text: 'Please click the link below to verify your email address:',
        html
    });
    console.log('Verification Email sent: ', JSON.stringify(info));
}



