import { PostMetaData } from "../../../components/PostMetaData";
const ProjectCard = (props: PostMetaData) => {
    return (
        
        <div className="group rounded-xl shadow-lg bg-base-200 group-hover:bg-base-100 ease-in-out duration-500 max-w-md">
          <img
              aria-label={'Image of ${props.title}'}
              src={props.thumbnail}
              alt={props.title}
              className="object-cover w-full h-48 group-hover:bg-base-100 rounded-t-xl p-3 ease-in-out duration-500"
              width={1000}
              height={500}
            />
          <div className="p-4 rounded-b-xl group-hover:bg-base-100 ease-in-out duration-500">
            <h3 className="text-lg font-medium">{props.title}</h3>
            <p className="text-sm mt-2 min-h-50">{props.subtitle}</p>
            <div className="flex flex-row mt-4">
              <a href={`/projects/${props.slug}`}  
                className="a-button"
                >Case Study</a>            
            </div>
          </div>
        </div>
    );
}

export default ProjectCard;