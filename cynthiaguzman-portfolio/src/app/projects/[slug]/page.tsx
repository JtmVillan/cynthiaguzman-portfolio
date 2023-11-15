import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import GetPostMetaData from "../../../../components/GetPostMetaData";

const getPostContent = (slug: string) => {
    const folder = "projects/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = GetPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

// props parameter captures input
const PostPage = (props: any) => {
    const slug = props.params.slug; // this param is whatever is in the []
    const post = getPostContent(slug); // display (unstyled) content of posts
    return (
        <div className="bg-base-200">
            <div className="mb-8 text-center">
              <h1 className="font-bold text-4xl" >{post.data.title}</h1>
            </div>

            <article className="prose mx-auto my-9">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;