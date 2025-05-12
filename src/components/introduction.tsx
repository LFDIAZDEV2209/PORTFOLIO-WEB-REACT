import { buttonVariants } from "./ui/button";
import Container from "./shared/container";
import Image from "next/image";
import Link from "next/link";
import { Mail, Paperclip } from "lucide-react";

const Introduction = () => {
  return (
    <Container>
      <div className="text-center" id="home">
        <h3 className="text-xl mb-3">Hello, I'm</h3>
        <h1 className="text-4xl font-bold mb-3">Luis Felipe Diaz 🧑🏻‍💻</h1>
        <h2 className="text-2xl text-gray-400">FullStack Developer</h2>
        <div className="flex items-center">
            <div className="flex flex-col md:flex-row gap-4 justify-between mt-8 mx-auto">
                <Link className={buttonVariants()}href="#contact">
                    <Mail />Contact Me
                </Link>

                <Link className={buttonVariants({ variant: 'secondary'})} href="/luis-felipe-cv.pdf" target="_blank">
                    <Paperclip />Download CV
                </Link>
            </div>
        </div>

        <div className="flex justify-center mt-10">
            <Image 
                className="rounded-full" 
                src="/Profile_Photo.jpg" 
                alt="Profile pic" 
                width={400} 
                height={400} 
            />
        </div>
      </div>
    </Container>
  );
};

export default Introduction;