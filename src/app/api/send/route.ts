import { Resend } from "resend"
import { EmailTemplate } from "@/components/ui/email-template"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: Request) {
    try {
        if (!resend) {
            return Response.json({ error: "Email service not configured" }, { status: 500 })
        }
        
        const dataForm = await req.json()
        try {
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["diazlf199@gmail.com"],
                subject: "New message from your website",
                react: await EmailTemplate({
                    username: dataForm.username,
                    email: dataForm.email,
                    message: dataForm.message
                }),
                text: "This is a test email"
            })
            return Response.json({ data }, { status: 200 })
        } catch {
            return Response.json({ error: "Failed to send email" }, { status: 500 })
        }
    } catch {
        return Response.json({ error: "Failed to send email" }, { status: 500 })
    }
}