import Link from "next/link";
import GetPostMetaData from "../../components/GetPostMetaData";
import PostPreview from "../../components/PostPreview";
import { Lobster } from "@next/font/google";
import { Prata } from "@next/font/google";

const lobster = Lobster({
  weight: ['400'],
  subsets: ['latin'],
})

const prata= Prata({
  weight: ['400'],
  subsets: ['latin'],
})

const hero = {
  content: (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.imgur.com/3CLQrIC.jpg)'}}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center">
        <div className="max-w-lg text-center">
          <h1 className="mb-5 text-6xl font-bold">Cynthia Guzman</h1>
          <p className="mb-5 text-xl">Mechanical Engineer</p>
          <footer>
            <div className="flex justify-center py-20">
              <Link href="#about">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300">
                  <path fill-rule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clip-rule="evenodd" />
                </svg>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  ),
};

const about = {
  content: (
    
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://i.imgur.com/gBAboXp.png" className="w-64 rounded-full shadow-2xl" />
        <div>
          <div className={prata.className}>
            <p className="text-7xl font-extrabold text-primary">Cynthia Guzman</p>
          </div>
          
          <p className="py-6 text-2xl">
            B.S <a href="https://mae.ucsd.edu/undergrad" className="hover:underline underline-offset-4 ease-in duration-150 decoration-primary 
            text-primary" target="_blank" rel="noopener noreferrer">Mechanical Engineering </a>with a Specialization in Robotics and Controls.</p>
          <p className="text-xl">
            I'm a recent graduate 
            from <a href="https://ucsd.edu/" className="hover:underline underline-offset-4 ease-in duration-150 decoration-primary 
            text-primary" target="_blank" rel="noopener noreferrer">UC San Diego</a> with an interest in mechanical 
            design and robotics! During my time at UC San Diego, I've had the chance to work on various research projects and 
            collaborate with and lead multidisciplinary teams. These experiences have enhanced my ability to think critically, 
            solve complex problems, and work effectively in a team environment. .
          </p>
          <p className="text-xl">
            In my free time, you can find me crocheting at home or roller skating at my local skate park!
          </p>
        </div>
      </div>
    </div>
  ),
};

const experience = {
  content: (
    <div className="px-8 py-16">
      <div className="text-center py-8">
        <h1 className="text-5xl font-extrabold">Experience</h1>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end ">
            <time className="italic">Aug 2021 - Aug 2022</time>
            <div className="text-xl font-bold flex flex-row gap-2 justify-end">
              <a href="http://gravishlab.ucsd.edu/" target="_blank" rel="noopener noreferrer" className="group ">
                <div className="flex flex-row gap-2">
                  <p  className="ease-in duration-150 decoration-primary group-hover:text-primary">Gravish Lab (UCSD)</p>
                  <svg className="w-6 h-6 group-hover:translate-x-1 ease-in duration-150 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </a>
            </div>
            <p className="text-lg italic">Undergraduate Student Researcher</p>
            <p className="text-md">
              Crafted an inaugural research proposal based on past designs of biomimetic swimming robots.
              Oversaw the design and fabrication processes of a swimming robot.
              Created 3D printed components with Fusion 360 and laser-cut acrylic parts.
            </p>
          </div>
        </li>
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end">
            <time className="italic">May 2021 - Aug 2021</time>
            <div className="text-xl font-bold flex flex-row gap-2">
              <a href="https://morimotolab.eng.ucsd.edu/" target="_blank" rel="noopener noreferrer" className="group ">
                <div className="flex flex-row gap-2">
                  <p  className="ease-in duration-150 decoration-primary group-hover:text-primary">Morimoto Lab (UCSD)</p>
                  <svg className="w-6 h-6 group-hover:translate-x-1 ease-in duration-150 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </a>
            </div>
            <p className="text-lg italic">Undergraduate Student Researcher</p>
            <p className="text-md">
              Led enhancement of the Laparoscopic Training Device (LTD) through strategic design management.
              Employed SolidWorks to create cost-effective 3D printed components for the LTD.
              Developed expertise in rapid prototyping with a focus on optimizing cost-efficiency. 
            </p>
          </div>
        </li>
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end">
            <time className="italic">Jan 2021- Jun 2023</time>
            <div className="text-xl font-bold flex flex-row gap-2 justify-end">
              <a href="https://jacobsschool.ucsd.edu/idea/" target="_blank" rel="noopener noreferrer" className="group ">
                <div className="flex flex-row gap-2">
                  <p  className="ease-in duration-150 decoration-primary group-hover:text-primary">UCSD IDEA Center</p>
                  <svg className="w-6 h-6 group-hover:translate-x-1 ease-in duration-150 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </a>
            </div>
            <p className="text-lg italic">Program Assistant</p>
            <p className="text-md">
              Offered administrative assistance for the <a href="https://jacobsschool.ucsd.edu/idea/admitted-undergraduates/aces" className="hover:underline underline-offset-4 ease-in duration-150 decoration-primary font-semibold text-primary" target="_blank" rel="noopener noreferrer">Academic Center for Engineering Success Program (ACES) </a>
              and the <a href="https://jacobsschool.ucsd.edu/idea/current-undergraduates/ELC" className="hover:underline underline-offset-4 ease-in duration-150 decoration-primary font-semibold text-primary" target="_blank" rel="noopener noreferrer">Engineering Learning Communities (ELC).</a> Conveyed vital administrative details to 12 
              peer educators and 77 ACES Scholars.
              Directed the coordination of meetings, workshops, and social events for peer educators and scholars.
            </p>
          </div>
        </li>
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end">
            <time className="italic">Sept 2018 - May 2019</time>
            <div className="text-xl font-bold flex flex-row gap-2">
              <a href="https://www.palomartechnologies.com/" target="_blank" rel="noopener noreferrer" className="group ">
                <div className="flex flex-row gap-2">
                  <p  className="ease-in duration-150 decoration-primary group-hover:text-primary">Palomar Technologies</p>
                  <svg className="w-6 h-6 group-hover:translate-x-1 ease-in duration-150 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </a>
            </div>
            <p className="text-lg italic">Intern</p>
            <p className="text-md">
              Devised measurement procedure for proxy dots produced by the <a href="https://www.palomartechnologies.com/product/9000-wedge-bonder" className="hover:underline underline-offset-4 ease-in duration-150 decoration-primary font-semibold text-primary" target="_blank" rel="noopener noreferrer">9000 Wedge Bonder</a>, 
              employing the <a href="https://www.keyence.com/products/microscope/digital-microscope/vhx-1000/models/vhx-1000e/" className="hover:underline underline-offset-4 ease-in duration-150 decoration-primary font-semibold text-primary" target="_blank" rel="noopener noreferrer">Keyence VHX-1000 digital microscope. </a>
              Conducted pixel calibration data acquisition and analysis for three types of die bonding machines to identify causes of machine calibration failures.
              Shadowed electrical and mechanical engineers addressing the <a href="https://www.palomartechnologies.com/product/6532hp-die-bonder font-semibold" className="hover:underline underline-offset-4 ease-in duration-150 decoration-primary font-semibold text-primary" target="_blank" rel="noopener noreferrer">6532HP die bonder.</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  ),
};

const miniProjects = {
  content: (
    <div className="text-center">
      {/* don't delete below line */}
       {/* <a role="button" href={`/projects/${props.slug}`} className="btn btn-primary">View Project</a> */}
      <div>
         <h1 className="text-4xl font-extrabold"> Mini Projects</h1>
      </div>
      <div className="collapse">
        <input type="checkbox"/>
        <div className="collapse-title flex justify-center">
          <div className="ps-6">
            <span className= "inline-block rounded-full">
              <svg className="w-12 h-12 p-3 stroke-current text-primary animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </div>
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center pb-8">
            <div className="flex items-center justify-center">
              <div className="group h-96 w-80 [perspective:1000px]">
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
              <div className="group h-96 w-80 [perspective:1000px]">
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
    <div className="py-8">
      <div className="text-center">
          <h1 className="text-5xl font-bold">Skills</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-8 content-center justify-center md:mx-36">
        <div className="flex flex-col items-center gap-2">
          <span className="p-3 inline-block rounded-full bg-primary">
            <svg className="w-20 h-20 p-3 stroke-current text-primary-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
            </svg>
          </span>
          <h3 className="text-lg font-semibold text-center">Hardware</h3>
          <div className="text-md text-center">Arduino</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="p-3 inline-block rounded-full bg-primary">
            <svg className="w-20 h-20 p-3 stroke-current text-primary-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </span>
          <h3 className="text-lg font-semibold text-center">Computer Aided Design</h3>
          <div className="text-md text-center">Inventor, SolidWorks, Fusion360</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="p-3 inline-block rounded-full bg-primary">
            <svg className="w-20 h-20 p-3 stroke-current text-primary-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
          </span>
          <h3 className="text-lg font-semibold text-center">Fabrication</h3>
          <div className="text-md text-center">3D Printing, Soldering, Laser Cutting, GD&T</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="p-3 inline-block rounded-full bg-primary">
            <svg className="w-20 h-20 p-3 stroke-current text-primary-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </span>
          <h3 className="text-lg font-semibold text-center">Programming Languages</h3>
          <div className="text-md text-center">Python, MatLab</div>
        </div>
      </div>
    </div>
    
  ),
};



// DO NOT DELETE
// const projects = {
//   content: (
//     <div className="mx-auto px-20 py-9">
//       <div className="text-center py-9">
//         <h1 className="text-5xl font-bold">Projects</h1>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           <div id="project-music" className="mx-auto">
//             <div className="card w-96 shadow-xl">
//               <figure><img className="h-48 w-96" src="https://i.imgur.com/vpQEhrGm.png" alt="music-device" /></figure>
//               <div className="card-body">
//                 <h2 className="card-title">
//                   <a className="link link-hover">3D Printed Embouchure Device for Woodwind Musicians</a>
//                 </h2>
//                 <p>Assistive device to create embouchure for partial facialy palsy</p>
//                 <div className="card-actions justify-start">
//                   <div className="badge badge-outline">Student Team</div> 
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div id="project-fish" className="mx-auto">
//             <div className="card w-96 shadow-xl ">
//               <figure><img className="h-48 w-96" src="https://i.imgur.com/xsn7jFym.png" alt="fish-robot" /></figure>
//               <div className="card-body">
//                 <h2 className="card-title">
//                   <a className="link link-hover">Biomimetic Swimming Robot</a>
//                 </h2>
//                 <p>Robot with a compliant tail, using a wheel and wire mechanimd to change its curvature</p>
//                 <div className="card-actions justify-start">
//                   <div className="badge badge-outline">Student Team</div> 
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div id="project-lapar" className="mx-auto">
//             <div className="card w-96 shadow-xl ">
//             <figure><img className="h-48 w-96" src="https://i.imgur.com/FJnhxeIm.png" alt="lapar-device" /></figure>
//               <div className="card-body">
//                 <h2 className="card-title">
//                   <a className="link link-hover">Laparoscopic Training Device</a>
//                 </h2>
//                 <p>​Improveed low-cost laparoscopic training device created by the <a href="https://morimotolab.eng.ucsd.edu/" className="link link-hover">Morimoto Lab</a>.</p>
//                 <div className="card-actions justify-start">
//                   <div className="badge badge-outline">Student Team</div> 
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div id="project-football" className="mx-auto">
//             <div className="card w-96 shadow-xl ">
//               <figure><img className="h-48 w-96" src="https://i.imgur.com/VsAj9cUm.png" alt="football-device" /></figure>
//               <div className="card-body">
//                 <h2 className="card-title">
//                   <a className="link link-hover">Football Launcher</a>
//                 </h2>
//                 <p>Contraption capable of launching a football 99 yards.</p>
//                 <div className="card-actions justify-start">
//                   <div className="badge badge-outline">Student Team</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//   ),
// };

const HomePage = () => {
  const postMetaData = GetPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="mx-12 lg:mx-48">
      {/* <div id="home">{hero.content}</div> */}
      <div id="about">{about.content}</div>
      <div id="experience">{experience.content}</div>
      <div id="projects">
        <div className="text-center pb-8 pt-20">
          <h1 className="text-5xl font-extrabold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-16">{postPreviews}</div>
      </div>
      <div>{miniProjects.content}</div>
      <div id="skills">{skills.content}</div>
    </div>
  );
};

export default HomePage;