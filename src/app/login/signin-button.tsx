'use client'

import { useFormStatus  } from 'react-dom'
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export const SignInButton = () => {
    const { pending } = useFormStatus()
    return <Button type="submit" disabled={pending}>
        { pending ?  <Loader2 className="animate-spin" />: null }
        Signin with Email
    </Button>
}