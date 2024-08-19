import { PostMetaData } from "../../../components/PostMetaData";
const ProjectCard = (props: PostMetaData) => {
    return (
        <div className="group rounded-xl shadow-lg bg-neutral hover: ease-in duration-300 max-w-md text-neutral-content flex flex-col justify-between">
          <div>
            <img
                aria-label={'Image of ${props.title}'}
                src={props.thumbnail}
                alt={props.title}
                className="object-cover w-full h-48 rounded-t-xl p-3"
                width={1000}
                height={500}
              />
            <div className="p-4 rounded-b-xl">
              <div>
                <h3 className="text-xl font-medium">{props.title}</h3>
                <p className="text-lg py-4 min-h-50">{props.subtitle}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row ps-3 pb-3">
              <a href={`/projects/${props.slug}`}  
                className="a-button"
                >Case Study</a>            
            </div>
          </div>
        </div>
    );
}

export default ProjectCard;