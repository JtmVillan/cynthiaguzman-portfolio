import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
    return (
        <div className="card mx-auto w-72 bg-base-100 shadow-xl hover:-translate-y-2 hover:scale-110 ease-in duration-300">
          <figure><img className="h-48 w-96" src={props.thumbnail} alt="project-device" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              <Link href={`/projects/${props.slug}`}>
                <h4 className="ease-in duration-150 decoration-secondary hover:text-secondary">{props.title}</h4>
              </Link>
            </h2>
            <p>{props.subtitle}</p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">Student Team</div> 
            </div>
          </div>
        </div>
    );
}

export default PostPreview;