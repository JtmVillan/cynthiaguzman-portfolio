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
        <div>
            <h2 className=" text-start py-8 text-4xl font-extrabold text-neutral-content">{title}</h2>
            <div className="rounded-xl shadow-lg flex flex-row w-9/12 content-center bg-base-200 p-10 gap-20">
                <div className="flex flex-col w-1/2">
                    <h3 className="pb-4 text-xl font-semibold">{subheading}</h3>
                    <p className="text-lg">{body}</p>
                </div>
                <div className="w-1/2"><Form/></div>
            </div> 
        </div>
    )
};