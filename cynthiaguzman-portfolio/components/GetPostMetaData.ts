import { PostMetaData } from "./PostMetaData";
import fs from "fs"
import matter from "gray-matter";

const GetPostMetaData = (): PostMetaData[] => {
    const folder = "projects/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`projects/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        thumbnail: matterResult.data.thumbnail,
        slug: fileName.replace(".md", ""),
      };
    });
  
    return posts;
  };

  export default GetPostMetaData;