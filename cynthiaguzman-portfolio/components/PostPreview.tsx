import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
    return (
      <div className="mx-auto bg-base-200">
          <div className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl  hover:-translate-y-2 hover:scale-110 ease-in duration-500">
              <figure><img className="h-48 w-96" src={props.thumbnail} alt="project-device" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  <Link href={`/projects/${props.slug}`}>
                  <h4 className="underline underline-offset-4 ease-in duration-150 decoration-secondary 
            hover:text-secondary">{props.title}</h4>
                 </Link>
                </h2>
                <p>{props.subtitle}</p>
                <div className="card-actions justify-start">
                  <div className="badge badge-outline">Student Team</div> 
                </div>
              </div>
            </div>
          </div>
      </div>
    );
}

export default PostPreview;