'use server'
import { auth } from "@/lib/betterAuth/auth";
import { headers } from "next/headers";
import {APIError} from "better-auth";

export const SignUpWithEmailStyle = async (
        { email, fullName, password, country, profession, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData
    ): Promise<SignUpResponse> => {
    try {
        const response = await auth.api.signUpEmail(
            {
                body: {
                    email,
                    password,
                    name: fullName,
                    // @ts-expect-error — custom fields not in inferred type yet
                    country, profession, investmentGoals, riskTolerance, preferredIndustry
                }
            }
        );
        return { success: true };
    } catch (error: unknown) {
        console.error('better-auth error sign up', JSON.stringify(error));
        return { success: false, message: error instanceof APIError ?  error.body?.message : 'An error occurred during sign up.' };
    }
}

export const SignInWithEmailStyle = async ({ email, password }: SignInFormData): Promise<SignInResponse> => {
    try {
        console.log('better-auth sign in', JSON.stringify({ email, password }))
        const response = await auth.api.signInEmail(
            {
                body: {
                    email,
                    password,
                }
            }
        );
        console.log('better-auth sign in response', JSON.stringify(response));
        return { success: true, user: response.user };
    } catch (error: unknown) {
        console.error('better-auth error sign in', JSON.stringify(error));
        return { success: false, message: error instanceof APIError ?  error.body?.message : 'An error occurred during sign in.' };
    }
}


export const signOut = async () => {
    try {
        await auth.api.signOut({ headers: await headers() });
    } catch (error: unknown) {
        console.log('Sign out failed', error)
        return { success: false, message: error instanceof APIError ?  error.body?.message : 'An error occurred during sign in.' };
    }
}

export const deleteAccount = async (password: string) => {
    try {
        const info = await auth.api.deleteUser({
            body: {
                password
            },
            headers: await headers(),
        });
        await signOut();
        console.log('better-auth delete account response', JSON.stringify(info))
        return { success: true };
    } catch (e) {
        console.log('Delete account failed', e)
        return { success: false, error: 'Delete account failed' }
    }
}