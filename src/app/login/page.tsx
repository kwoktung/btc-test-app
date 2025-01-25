import { signIn } from "@/auth"
import { Input } from "@/components/ui/input"
import { auth } from "@/auth"
import { redirect } from 'next/navigation'

// import { Button } from "@/components/ui/button"

export default async function Home() {
  const session = await auth()
  if (session) {
    return redirect('/')
  }
  return <div className="w-full h-full p-4">
    <form
  action={async (formData) => {
    "use server"
    await signIn("resend", formData)
  }}
>
  <Input type="text" name="email" placeholder="Email" />
  <button type="submit">Signin with Resend</button>
</form>
  </div>
}
