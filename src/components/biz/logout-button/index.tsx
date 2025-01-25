import { signOut } from "@/auth"
import { Button } from "@/components/ui/button"

export function LogoutButton() {
  return <div>
    <form
      action={async (formData) => {
        "use server"
        await signOut({ redirectTo: '/login' })
      }}
    >
      <Button type="submit">Logout</Button>
    </form>
  </div>
}
