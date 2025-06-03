import Title from "./shared/title";
import { dataContact } from "../../data";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto">
      <Title title="Contact Me" subtitle="Get in touch with me 👋" />

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
        <div>
            {dataContact.map((contact) => (
                <div key={contact.id} className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4">
                    {contact.icon}
                    <p>{contact.title}</p>
                    <p>{contact.subtitle}</p>
                    <Link href={contact.link} target="_blank">
                        Send a message
                    </Link>
                </div>
            ))}
        </div>
        <div className="col-span-2">
            <ContactForm />
        </div>
      </div>

    </div>
  );
};

export default Contact;