import { Form } from "./form";

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
        <div className="">
            <h2 className=" text-start py-8 text-4xl font-extrabold text-secondary-content">{title}</h2>
            <div className="rounded-xl shadow-lg flex flex-col lg:w-9/12 lg:flex-row bg-base-200 p-2 gap-3">
                <div className="flex flex-col lg:w-1/2">
                    <h3 className="py-4 text-xl font-semibold">{subheading}</h3>
                    <p className="text-md">{body}</p>
                </div>
                <div className="lg:w-1/2"><Form/></div>
            </div> 
        </div>
    )
};