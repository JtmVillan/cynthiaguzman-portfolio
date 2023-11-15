import Link from "next/link";
import GetPostMetaData from "../../components/GetPostMetaData";
import PostPreview from "../../components/PostPreview";

const hero = {
  content: (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-center">
          <h1 className="mb-5 text-5xl font-bold">Cynthia Guzman</h1>
          <p className="mb-5">Mechanical Engineer</p>
          <div className="flex justify-center">
            <Link href="#about">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fill-rule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clip-rule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ),
};

const about = {
  content: (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://i.imgur.com/gBAboXp.png" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Hey I'm Cynthia!</h1>
          <p className="py-6">
            B.S Mechanical Engineering with a Specialization in Robotics and Controls.</p>
          <p>
            I'm a recent graduate from UC San Diego.
          </p>
          <p>
            Some of my hobbies include crocheting and roller skating.
          </p>
        </div>
      </div>
    </div>
  ),
};

// TODO: FILL WITH REAL EXPERIENCE
const experience = {
    content: (
      <div className="mx-auto px-40 py-24 bg-base-300">
        <div className="text-center py-9">
          <h1 className="text-5xl font-bold">Experience</h1>
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li id="work-1">
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">20__</time>
              <div className="text-lg font-black">Most Recent Work</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedita illum harum aspernatur beatae, aliquam numquam velit animi suscipit consequuntur libero alias nemo, ea voluptas impedit delectus? Quos, tempora quia?
            </div>
            <hr/>
          </li>
          <li id="work-2">
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">20__</time>
              <div className="text-lg font-black">Older Work</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam doloribus voluptatibus, quisquam est quibusdam dolor, nesciunt nihil placeat molestiae hic dignissimos numquam amet. Recusandae maxime facere laboriosam voluptate necessitatibus.
            </div>
            <hr />
          </li>
        </ul>
      </div>
    ),
};

const HomePage = () => {
  const postMetaData = GetPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <div id="home">{hero.content}</div>
      <div id="about">{about.content}</div>
      <div id="experience">{experience.content}</div>
      <div id="projects" className="mx-auto px-20 py-24 bg-base-200">
        <div className="text-center py-9">
          <h1 className="text-5xl font-bold">Projects</h1>
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">{postPreviews}</div>
        </div>
    </div>
  );
};

export default HomePage;