import { signIn } from "@/auth"
import { Input } from "@/components/ui/input"
import { auth } from "@/auth"
import { redirect } from 'next/navigation'

import { SignInButton } from './signin-button'

export default async function Home() {
  const session = await auth()
  if (session) {
    return redirect('/')
  }
  return <div className="w-full h-full p-4">
    <form
    className="max-w-96 mx-auto mt-32"
    action={async (formData) => {
      "use server"
      await signIn("resend", formData)
    }}
>
  <Input className="mb-4" type="text" name="email" placeholder="Email" />
  <SignInButton />
</form>
  </div>
}
