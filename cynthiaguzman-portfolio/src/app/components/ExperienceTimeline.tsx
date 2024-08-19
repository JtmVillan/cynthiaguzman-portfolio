type ExperienceTimelineProps = {
    data: {
        name: string;
        role: string;
        date: string;
        body: string;
        link: string;
    };
};

export const ExperienceTimeline = ({ data } : ExperienceTimelineProps) => {
    const {name, role, date, body, link} = data;

    return (
        <div className="py-4 ">
            <a href={link} target="_blank" rel="noopener noreferrer" className="group/link">
                <div className="rounded-xl bg-neutral md:w-3/4 lg:w-2/3 group hover: ease-in-out duration-500">
                    <div className="p-4 text-neutral-content">
                        <div className="flex flex-row gap-2">
                            <p  className="text-xl font-semibold ease-in duration-150 decoration-primary group-hover/link:text-neutral-content">{name}</p>
                            <svg className="w-6 h-6 lg:opacity-0 group-hover:opacity-100
                            group-hover/link:translate-x-1 ease-in duration-150 
                            group-hover/link:text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </div>
                        <div><span className="text-xl italic">{role}</span></div>
                        <span className="text-lg pb-2">{date}</span>
                        <div className="text-xl">{body}</div>
                    </div>
                </div>
            </a>
        </div>
        
    );
};