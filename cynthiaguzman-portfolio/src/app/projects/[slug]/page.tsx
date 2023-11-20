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

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div className="bg-base-300 py-16">
            <div className="mb-8 text-center py-9">
              <h1 className="font-bold text-4xl">{post.data.title}</h1>
            </div>
            <article className="prose mx-auto">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;