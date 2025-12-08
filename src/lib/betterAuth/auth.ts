import {betterAuth} from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
import {connectToDatabase} from "@/lib/mongodb/connector";
import {nextCookies} from "better-auth/next-js";
import {sendVerificationEmail, sendWelcome} from "@/lib/nodemailer/emailClient";
import {customSessionClient} from "better-auth/client/plugins";
import {customSession} from "better-auth/plugins";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async (): Promise<ReturnType<typeof betterAuth>> => {
    if (authInstance) return authInstance;

    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    if (!db) throw new Error('MongoDB connection not found');

    authInstance = betterAuth({
        database: mongodbAdapter(db),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        emailVerification: {
            sendVerificationEmail: async ({user, url, token}, request) => {
                // nodemailer send
                await sendVerificationEmail({
                    to: user.email,
                    username: user.name,
                    verificationLink: url,
                })
            },
            async afterEmailVerification(user, request) {
                sendWelcome({
                    to: user.email,
                    username: user.name,
                    intro: "We're excited to have you on board! Explore the platform and start your investment journey with us."
                });
            },
            sendOnSignUp: true,
            autoSignInAfterVerification: true,
            expiresIn: 3600,
            callbackURL: '/?from=verify-email',
        },
        plugins: [
            nextCookies(),
            customSessionClient<typeof auth>(),
            customSession(async ({user, session}) => {
                return {
                    user: {
                        ...user,
                    },
                    session
                };
            }),
        ],
        user: {
            deleteUser: {
                enabled: true
            },
            additionalFields: {
                country: {
                    type: "string",
                    required: true
                },
                profession: {
                    type: "string",
                    required: true
                },
                investmentGoals: {
                    type: "string",
                    required: true
                },
                riskTolerance: {
                    type: "string",
                    required: true
                },
                preferredIndustry: {
                    type: "string",
                    required: true
                }
            },
        }
    });
    return authInstance;
}

export const auth = await getAuth();



