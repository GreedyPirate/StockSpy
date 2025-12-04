'use server'
import { authClient } from "@/lib/betterAuth/auth";
import { C } from "node_modules/better-auth/dist/index-COnelCGa.mjs";

interface SignUpResponse {
    success: boolean;
    message?: string;
}

interface SignInResponse {
    success: boolean;
    message?: string;
}

export async function SignUpWithEmailStyle({ email, fullName, password, country, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData): Promise<SignUpResponse> {
    try {
        const response = await authClient.api.signUpEmail(
            {
                body: {
                    email,
                    password,
                    name: fullName,
                }
            }
        );
        return { success: true };
    } catch (error:any) {
        console.error('better-auth error sign up', JSON.stringify(error));
        return { success: false, message: error.body?.message || 'An error occurred during sign up.' };
    }
}

export async function SignInWithEmailStyle({ email, password }: SignInFormData): Promise<SignInResponse> {
    try {
        const response = await authClient.api.signInEmail(
            {
                body: {
                    email,
                    password,
                }
            }
        );
        return { success: true };
    } catch (error: any) {
        console.error('better-auth error sign in', JSON.stringify(error));
        return { success: false, message: error.body?.message || 'An error occurred during sign in.' };
    }
}