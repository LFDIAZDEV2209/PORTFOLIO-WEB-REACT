import { Resend } from "resend"
import { EmailTemplate } from "@/components/ui/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
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