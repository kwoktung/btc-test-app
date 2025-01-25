import { signIn } from "@/auth"

export default function Home() {
  return <form
  action={async (formData) => {
    "use server"
    await signIn("resend", { ...formData, redirectTo: '/' })
  }}
>
  <input type="text" name="email" placeholder="Email" />
  <button type="submit">Signin with Resend</button>
</form>
}
