import { Form } from "./form";
import { Concert_One } from "@next/font/google";

const concert = Concert_One({
    weight: ['400'],
    subsets: ['latin'],
  })

type ContactProps = {
    data: {
        title: string;
        subheading: string;
        body: string;
    };
};

export const Contact = ({ data } : ContactProps) => {
    const {title, subheading, body} = data;
    return (
        <div className="mx-4">
            <div className={concert.className}>
                <h2 className=" text-start py-8 text-5xl font-extrabold text-secondary-content">{title}</h2>
            </div>
            <div className="px-4 rounded-xl shadow-lg flex flex-col lg:w-9/12 lg:flex-row bg-base-200 p-2 gap-3">
                <div className="flex flex-col lg:w-1/2">
                    <h3 className="py-6 text-2xl font-semibold">{subheading}</h3>
                    <p className="text-lg">{body}</p>
                </div>
                <div className="lg:w-1/2"><Form/></div>
            </div> 
        </div>
    )
};