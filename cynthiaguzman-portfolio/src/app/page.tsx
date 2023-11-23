import GetPostMetaData from "../../components/GetPostMetaData";
import ProjectCard from "./components/ProjectCard";
import { Lobster } from "@next/font/google";
import { aboutMeData, contactData, experienceData } from "./data/data";
import { skillData } from "./data/data";
import { SkillDisplay } from "./components/SkillDisplay";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Contact } from "./components/Contact";
import { Concert_One } from "@next/font/google";


const concert = Concert_One({
  weight: ['400'],
  subsets: ['latin'],
})

const about = {
  content: (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse text-primary">
        <img src={aboutMeData.image} className="w-52 lg:w-64 rounded-full shadow-2xl brightness-90" title="profile" alt="profile" />
        <div>
          <div className={concert.className}>
            <p className="text-7xl lg:text-8xl font-bold">{aboutMeData.name}</p>
          </div>
            <p className="py-6 text-2xl lg:text-3xl italic">{aboutMeData.title}</p>
          <div className="text-xl lg:text-2xl pt-2">
            <p>
              {aboutMeData.body}
            </p>
            <p className="pt-2">
              {aboutMeData.body2} 
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

const experience = {
  content: (
    <div className="py-20 px-12 lg:px-48 bg-secondary text-base-content">
      <div className={concert.className}>
        <div className="text-start py-8">
          <h1 className="text-5xl font-extrabold">Experiences</h1>
        </div>
      </div>
      <div>
        {experienceData.map((exp) => {
          return <ExperienceTimeline data={exp}/>
        })}
      </div>
    </div>
  ),
};

const skills = {
  content: (
    <div className="py-48 px-12 lg:px-48 bg-neutral text-neutral-content">
      <div className={concert.className}>
          <h1 className="text-5xl font-bold">Skills</h1>
      </div>
      {/* Don't delete below */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 ps-8 pt-8 gap-8">
        <div className="grid grid-cols-2 gap-2 justify-items-start">
          <div className="place-item-end">
            <span className="p-3 inline-block rounded-full bg-primary drop-shadow-xl">
              <svg className="w-20 h-20 p-3 stroke-current text-base" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
              </svg>
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Hardware</h3>
            <div className="text-md">Arduino</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-items-start">
          <div>
            <span className="p-3 inline-block rounded-full bg-primary drop-shadow-xl">
              <svg className="w-20 h-20 p-3 stroke-current text-base" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Computer Aided Design</h3>
            <div className="text-md">Inventor, SolidWorks, Fusion360</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-items-start">
          <div>
            <span className="p-3 inline-block rounded-full bg-primary drop-shadow-xl">
              <svg className="w-20 h-20 p-3 stroke-current text-base" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Fabrication</h3>
            <div className="text-md">3D Printing, Soldering, Laser Cutting, GD&T</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-items-start">
          <div>
            <span className="p-3 inline-block rounded-full bg-primary drop-shadow-xl">
              <svg className="w-20 h-20 p-3 stroke-current text-base" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Programming Languages</h3>
            <div className="text-md">Python, MatLab</div>
          </div>
        </div>
      </div> */}
      <div className="grid grid-col-1 lg:grid-cols-2">
        {skillData.map((skill) => {
          return <SkillDisplay data={skill}/>
        })}
      </div>
    </div>
    
  ),
};

const contact = {
  content: (
    <div className="py-20">
      <div>
        {contactData.map((con) => {
          return <Contact data={con}/>
        })}
      </div>
    </div>
  )
};


const HomePage = () => {
  const postMetaData = GetPostMetaData();
  const ProjectCards = postMetaData.map((post) => (
    <ProjectCard key={post.slug} {...post} />
  ));

  return (
    <div>
      <div id="about" className="my-24 lg:my-0 mx-12 lg:mx-48">{about.content}</div>
      <div id="experience" className="">{experience.content}</div>
      <div id="projects" className="py-8 px-12 lg:px-48 bg-base-300">
      <div className={concert.className}>
        <div className="pb-8 pt-20">
          <h1 className="text-5xl font-extrabold text-base-content">Projects</h1>
        </div>
       </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">{ProjectCards}</div>
      </div>
      <div id="skills" className="">{skills.content}</div>
      <div id="contact" className="px-12 lg:px-48 bg-secondary">{contact.content}</div>
    </div>
  );
};

export default HomePage;