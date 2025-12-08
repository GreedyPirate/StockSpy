import { auth } from "@/lib/betterAuth/auth"; // 你的 auth 实例
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);