"use client"

import {
    Form,
    FormControl,
    FormField,
    FormItem
} from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button"
import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

const ContactForm = () => {
  const { language } = useLanguage()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const texts = {
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      success: "Email sent successfully",
      error: "Failed to send email"
    },
    es: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar",
      success: "Correo enviado exitosamente",
      error: "Error al enviar el correo"
    }
  }

  const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(values)
    })
    if (response.ok) {
      setSuccess(true)
    } else {
      setError("Failed to send email")
    }
  }

  return (
    <Form {...form}>
      {success ? (
        <div className="bg-green-500 text-white p-4 rounded-md">
          {texts[language].success}
        </div>
      ) : ( 
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"> 
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={texts[language].name}
                  {...field}
                  className="dark:bg-slate-800"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={texts[language].email}
                  {...field}
                  className="dark:bg-slate-800"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder={texts[language].message}
                  {...field}
                  className="dark:bg-slate-800"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">{texts[language].send}</Button>
      </form>
      
      )}
    </Form>

    
  );
};

export default ContactForm;