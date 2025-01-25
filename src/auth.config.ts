import type { NextAuthConfig } from "next-auth"
import Resend from "next-auth/providers/resend"
 
export default {
    providers: [Resend({ from: 'Auth.js <onboarding@resend.dev>'})],
} satisfies NextAuthConfig