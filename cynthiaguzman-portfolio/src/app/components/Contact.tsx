import { Form } from "./form";
import { Concert_One } from "@next/font/google";

const concert = Concert_One({
    weight: ['400'],
    subsets: ['latin'],
  })

type ContactProps = {
    data: {
        title: string;
        email: string;
        email_link: string;
        linkedin: string;

    };
};

export const Contact = ({ data } : ContactProps) => {
    const {title, email, email_link, linkedin, } = data;
    return (
        <div className="mx-4">
            <div className={concert.className}>
                <h2 className=" text-start py-8 text-5xl font-extrabold text-base-content">{title}</h2>
            </div>
            <div className="px-4 rounded-xl shadow-lg flex flex-col lg:w-9/12 lg:flex-row bg-neutral text-neutral-content p-2 gap-3">
                <div className="flex flex-col ">
                    <h3 className="pt-6 pb-3 text-2xl font-semibold">{email}</h3>
                    <a href="https://www.linkedin.com/in/cynthiaguzman12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                        <svg className="my-4 h-8 w-8 hover:text-accent ease-in duration-150 " viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2"/></svg>
                    </a>
                </div>
                <div className="flex flex-col ">
                    <a 
                        href="cynthia.guzman1748@gmail.com" 
                        className="py-6 text-xl font-semibold hover:text-accent ease-in duration-150 "
                        target="_blank" rel="noopener noreferrer"> {email_link}
                    </a>
                </div>
                {/* <div className="lg:w-1/2"><Form/></div> */}
            </div> 
        </div>
    )
};