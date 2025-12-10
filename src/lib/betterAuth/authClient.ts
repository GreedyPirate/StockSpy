import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { auth } from "./auth";

export const {
    getSession,
    useSession,
    signIn, 
    signUp,
    signOut,
    sendVerificationEmail,
} = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.BETTER_AUTH_URL,
    plugins: [inferAdditionalFields<typeof auth>()],
    fetchOptions: {
        timeout: 3000,
        retry: {
            type: "exponential",
            attempts: 3,
            baseDelay: 100,
            maxDelay: 1000,
            shouldRetry: (response: Response | null): boolean | Promise<boolean> => {
                if (!response) return true;
                return response.status >= 500 || response.status === 429;
            }
        }
    }
});