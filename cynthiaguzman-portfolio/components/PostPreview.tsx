import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
    return (
        <div className="card card-compact h-screen shadow-xl scale-90">
          <figure><img className="w-96" src={props.thumbnail} alt="project-device" /></figure>
          <div className="card-body bg-base-200">
            <h2 className="card-title">
              <p className="text-lg font-bold">{props.title}</p>
            </h2>
            <p className="text-md">{props.subtitle}</p>
            <div className="justify-end">
              <a role="button" href={`/projects/${props.slug}`} className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
    );
}

export default PostPreview;