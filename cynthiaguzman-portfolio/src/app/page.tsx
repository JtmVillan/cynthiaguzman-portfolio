import GetPostMetaData from "../../components/GetPostMetaData";
import ProjectCard from "./components/ProjectCard";
import { Lobster } from "@next/font/google";
import { aboutMeData, contactData, experienceData } from "./data/data";
import { skillData } from "./data/data";
import { SkillDisplay } from "./components/SkillDisplay";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Contact } from "./components/Contact";
import { Concert_One } from "@next/font/google";
import { Inter } from '@next/font/google'
import { Roboto } from '@next/font/google'
import { Raleway } from '@next/font/google'
import { Ruda } from '@next/font/google'
import { Noto_Sans } from '@next/font/google'
import { Ubuntu } from '@next/font/google'
import { Dosis } from '@next/font/google'


const concert = Concert_One({
  weight: ['400'],
  subsets: ['latin'],
})

const lobster = Lobster({
  weight: ['400'],
  subsets: ['latin'],
})

const inter = Inter({
  subsets:['latin'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300'],
})

const raleway = Raleway({
  subsets: ['latin'],
})

const ruda = Ruda({
  subsets: ['latin'],
})

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400'],
})


const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400'],
})

const dosis = Dosis({
  subsets: ['latin'],
  weight: ['400'],
})

const about = {
  content: (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={aboutMeData.image} className="w-52 lg:w-64 rounded-full shadow-2xl brightness-90" title="profile" alt="profile" />
        <div>
          <div className={concert.className}>
            <h1 className="text-7xl lg:text-8xl font-bold text-base-content">{aboutMeData.name}</h1>
          </div>
          <div className="text-base">
            <h2 className="py-6 text-2xl lg:text-3xl italic">{aboutMeData.title}</h2>
            <div className="text-xl lg:text-2xl pt-2">
              <p>
                {aboutMeData.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

const experience = {
  content: (
    <div className="py-20 px-12 lg:px-48 bg-base-100">
      <div className={concert.className}>
        <div className="text-start py-8">
          <h1 className="text-5xl font-extrabold text-base-content">Experiences</h1>
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
    <div className="py-48 px-12 lg:px-48 bg-base-100">
      <div className={concert.className}>
          <h1 className="text-5xl font-bold text-base-content">Skills</h1>
      </div>
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
      <div id="projects" className="py-8 px-12 lg:px-48">
      <div className={concert.className}>
        <div className="pb-8 pt-20">
          <h1 className="text-5xl font-extrabold text-base-content">Projects</h1>
        </div>
       </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">{ProjectCards}</div>
      </div>
      <div id="skills" className="">{skills.content}</div>
      <div id="contact" className="px-12 lg:px-48">{contact.content}</div>
    </div>
  );
};

export default HomePage;