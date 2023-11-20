import GetPostMetaData from "../../components/GetPostMetaData";
import ProjectCard from "./components/ProjectCard";
import { Lobster } from "@next/font/google";
import { aboutMeData, contactData, experienceData } from "./data/data";
import { skillData } from "./data/data";
import { SkillDisplay } from "./components/SkillDisplay";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Contact } from "./components/Contact";

const lobster = Lobster({
  weight: ['400'],
  subsets: ['latin'],
})

const about = {
  content: (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={aboutMeData.image} className="w-52 lg:w-64 rounded-full shadow-2xl brightness-90" title="profile" alt="profile" />
        <div>
          <div className={lobster.className}>
            <p className="text-7xl lg:text-8xl text-primary">{aboutMeData.name}</p>
          </div>
          <p className="py-6 text-xl lg:text-2xl italic">{aboutMeData.title}</p>
          <p className="text-md lg:text-lg">
            {aboutMeData.body}
          </p>
          <p className="text-md lg:text-lg pt-2">
            {aboutMeData.body2} 
          </p>
        </div>
      </div>
    </div>
  ),
};

const experience = {
  content: (
    <div className="my-16 py-12 px-12 lg:px-48 bg-base-300 text-base-content">
      <div className="text-start py-8">
        <h1 className="text-6xl font-extrabold">Experiences</h1>
      </div>
      <div>
        {experienceData.map((exp) => {
          return <ExperienceTimeline data={exp}/>
        })}
      </div>
    </div>
  ),
};

const miniProjects = {
  content: (
    <div className="">
      <div>
         <h1 className="text-3xl font-extrabold text-primary"> Mini Projects</h1>
      </div>
      <div className="collapse">
        <label htmlFor="reveal"/>
        <input id="reveal" name="reveal" type="checkbox" title="reveal" placeholder="reveal"/>
        <div className="collapse-title">
          <span className= "inline-block rounded-full">
            <svg className="w-12 h-12 p-3 stroke-current text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
        <div className="collapse-content">
          <div className="flex flex-col lg:flex-row flex-row-wrap gap-16 pb-8">
            <div className="flex items-center justify-center">
              <div className="group h-96 w-64 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0">
                    <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://i.imgur.com/JzGyIQ5m.png" alt="" />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold">Unique Chess Pieces</h1>
                      <p className="text-xs lg:text-sm">
                      In this brief side project, I crafted chess pieces with the piece names as the main body, 
                      exploring unique shapes with various Inventor tools. 
                      This initial foray into CAD software also provided valuable insights into designing for 3D printing integrity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="group h-96 w-64 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0">
                    <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://i.imgur.com/gXDtLfNm.png" alt="" />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold">Mechanical Clock</h1>
                      <p className="text-xs lg:text-sm">
                      I learned basic assembly techniques in Inventor, designing an escapement wheel and treble clef pendulum. 
                      Inspired by my love for music, I chose the treble clef for its suitability for 8 bolts as weights. 
                      This project enhanced my skills with joints, constraints, and splines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

const skills = {
  content: (
    <div className="my-12 py-48 px-12 lg:px-48 bg-secondary text-secondary-content">
      <div className="">
          <h1 className="text-6xl font-bold">Skills</h1>
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
    <div className="py-16">
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
      <div id="about" className="mx-12 lg:mx-48">{about.content}</div>
      <div id="experience" className="">{experience.content}</div>
      <div id="projects" className="mx-12 lg:mx-48">
        <div className="pb-8 pt-20">
          <h1 className="text-6xl font-extrabold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-16">{ProjectCards}</div>
      </div>
      <div className="mx-12 lg:mx-48">{miniProjects.content}</div>
      <div id="skills" className="">{skills.content}</div>
      <div id="contact" className="mx-12 lg:mx-48">{contact.content}</div>
    </div>
  );
};

export default HomePage;