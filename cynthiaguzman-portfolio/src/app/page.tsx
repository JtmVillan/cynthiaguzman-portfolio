import Link from "next/link";
import GetPostMetaData from "../../components/GetPostMetaData";
import PostPreview from "../../components/PostPreview";

const hero = {
  content: (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.imgur.com/3CLQrIC.jpg)'}}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://i.imgur.com/gBAboXp.png" className="w-64 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Hey I'm Cynthia!</h1>
          <p className="py-6">
            B.S <a href="https://mae.ucsd.edu/undergrad" className="underline underline-offset-4 ease-in duration-150 decoration-accent 
            hover:text-accent" target="_blank" rel="noopener noreferrer">Mechanical Engineering </a>with a Specialization in Robotics and Controls.</p>
          <p>
            I'm a recent graduate 
            from <a href="https://ucsd.edu/" className="underline underline-offset-4 ease-in duration-150 decoration-accent 
            hover:text-accent" target="_blank" rel="noopener noreferrer">UC San Diego</a>.
          </p>
          <p>
            Some of my hobbies include crocheting and roller skating.
          </p>
        </div>
      </div>
    </div>
  ),
};

const experience = {
    content: (
      <div className="px-8 pb-16 bg-base-300">
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold">Experience</h1>
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end ">
              <time className="font-mono italic">Aug 2021 - Aug 2022</time>
              <div className="text-xl fontbold"><a href="http://gravishlab.ucsd.edu/" className="ease-in duration-150 decoration-secondary hover:text-secondary" target="_blank" rel="noopener noreferrer">Gravish Lab (UCSD)</a></div>
              <p className="text-lg italic">Undergraduate Student Researcher</p>
              <p>
                Crafted an inaugural research proposal by delving into past designs of biomimetic swimming robots.
                Oversaw the design and fabrication processes of a swimming robot.
                Applied Fusion 360 for the creation of 3D printed components and employed a laser cutter for precision cutting of acrylic parts.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end">
              <time className="font-mono italic">May 2021 - Aug 2021</time>
              <div className="text-xl font-bold"><a href="https://morimotolab.eng.ucsd.edu/" className="ease-in duration-150 decoration-secondary hover:text-secondary" target="_blank" rel="noopener noreferrer">Morimoto Lab - Contextual Robotics Institute (UCSD)</a></div>
              <p className="text-lg italic">Undergraduate Student Researcher</p>
              <p>
                Led the enhancement of the Laparoscopic Training Device (LTD) through strategic design management.
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
              <time className="font-mono italic">Jan 2021- Jun 2023</time>
              <div className="text-xl font-bold"><a href="https://jacobsschool.ucsd.edu/idea/" className="ease-in duration-150 decoration-secondary hover:text-secondary" target="_blank" rel="noopener noreferrer">UCSD IDEA Center</a></div>
              <p className="text-lg italic">Program Assistant</p>
              <p>
                Offered administrative assistance for the <a href="https://jacobsschool.ucsd.edu/idea/admitted-undergraduates/aces" className="underline underline-offset-4 ease-in duration-150 decoration-accent font-semibold hover:text-accent" target="_blank" rel="noopener noreferrer">Academic Center for Engineering Success Program (ACES)</a> and 
                the <a href="https://jacobsschool.ucsd.edu/idea/current-undergraduates/ELC" className="underline underline-offset-4 ease-in duration-150 decoration-accent font-semibold hover:text-accent" target="_blank" rel="noopener noreferrer">Engineering Learning Communities (ELC).</a> Conveyed vital administrative details to 12 
                peer educators and 77 ACES Scholars.
                Directed the coordination and scheduling of meetings, workshops, and social events for both peer educators and scholars.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end">
              <time className="font-mono italic">Sept 2018 - May 2019</time>
              <div className="text-xl font-bold"><a href="https://www.palomartechnologies.com/" className="ease-in duration-150 decoration-secondary hover:text-secondary" target="_blank" rel="noopener noreferrer">Palomar Technologies</a></div>
              <p className="text-lg italic">Intern</p>
              <p>
                Devised a measurement procedure for proxy dots produced by the <a href="https://www.palomartechnologies.com/product/9000-wedge-bonder" className="underline underline-offset-4 ease-in duration-150 decoration-accent font-semibold hover:text-accent" target="_blank" rel="noopener noreferrer">9000 Wedge Bonder</a>, 
                employing the <a href="https://www.keyence.com/products/microscope/digital-microscope/vhx-1000/models/vhx-1000e/" className="underline underline-offset-4 ease-in duration-150 decoration-accent font-semibold hover:text-accent" target="_blank" rel="noopener noreferrer">Keyence VHX-1000 digital microscope. </a>
                Acquired proficiency in fundamental programming functions for wire bonding on the 9000 Wedge Bonder.
                Conducted pixel calibration data acquisition and analysis for three distinct types of die bonding machines spanning three years, aimed at identifying the causes of machine calibration failures.
                Shadowed electrical and mechanical engineers addressing challenges on the new <a href="https://www.palomartechnologies.com/product/6532hp-die-bonder font-semibold" className="underline underline-offset-4 ease-in duration-150 decoration-accent font-semibold hover:text-accent" target="_blank" rel="noopener noreferrer">6532HP die bonder.</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    ),
};

const skills = {
  content: (
    <div className="bg-base-300">
      <div className="text-center py-16">
          <h1 className="text-5xl font-bold">Skills</h1>
      </div>

      <div className="flex flex-col w-full pb-12 px-10">
        <div className="flex flex-row justify-center gap-16">
          <div className="card card-compact w-72 bg-base-100 shadow-xl hover:-translate-y-2 ease-in duration-100">
            <figure><img src="https://i.imgur.com/gXDtLfNm.png" alt="clock" /></figure>
            <div className="card-body">
              <h2 className="card-title">Mechanical Clock</h2>
            </div>
          </div>
          <div className="card card-compact w-72 bg-base-100 shadow-xl hover:-translate-y-2 ease-in duration-100">
            <figure><img src="https://i.imgur.com/JzGyIQ5m.png" alt="chess" /></figure>
            <div className="card-body">
              <h2 className="card-title">Unique Chess Piece</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 p-8 gap-8 content-center justify-center md:mx-36">
          <div className="flex flex-col items-center">
            <span className="p-3 bg-gray-600 inline-block rounded-full bg-opacity-50">
              <svg className="w-12 h-12 p-3 stroke-current text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
              </svg>
            </span>
            <h3 className="text-lg font-semibold text-center">Hardware</h3>
            <div className="text-sm font-neutral-content text-center">Arduino</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-gray-600 inline-block rounded-full bg-opacity-50">
              <svg className="w-12 h-12 p-3 stroke-current text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </span>
            <h3 className="text-lg font-semibold text-center">Computer Aided Design</h3>
            <div className="text-sm font-neutral-content text-center">Inventor, SolidWorks, Fusino360</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-gray-600 inline-block rounded-full bg-opacity-50">
              <svg className="w-12 h-12 p-3 stroke-current text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </span>
            <h3 className="text-lg font-semibold text-center">Fabrication</h3>
            <div className="text-sm font-neutral-content text-center">3D Printing, Soldering, Laser Cutting, GD&T</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-gray-600 inline-block rounded-full bg-opacity-50">
              <svg className="w-12 h-12 p-3 stroke-current text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </span>
            <h3 className="text-lg font-semibold text-center">Programming Languages</h3>
            <div className="text-sm font-neutral-content text-center">Python, MatLab</div>
          </div>

        </div>
      </div>
    </div>
    
  ),
};

// DO NOT DELETE
// const projects = {
//   content: (
//     <div className="mx-auto px-20 py-9 bg-base-400">
//       <div className="text-center py-9">
//         <h1 className="text-5xl font-bold">Projects</h1>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           <div id="project-music" className="mx-auto">
//             <div className="card w-96 bg-base-100 shadow-xl">
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
//             <div className="card w-96 bg-base-100 shadow-xl ">
//               <figure><img className="h-48 w-96" src="https://i.imgur.com/xsn7jFym.png" alt="fish-robot" /></figure>
//               <div className="card-body">
//                 <h2 className="card-title">
//                   <a className="link link-hover">Biomimetic Swimming Robot</a>
//                 </h2>
//                 <p>Robot with a compliant tail, using a wheel and wire mechanism to change its curvature</p>
//                 <div className="card-actions justify-start">
//                   <div className="badge badge-outline">Student Team</div> 
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div id="project-lapar" className="mx-auto">
//             <div className="card w-96 bg-base-100 shadow-xl ">
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
//             <div className="card w-96 bg-base-100 shadow-xl ">
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
    <main>
      <div id="home">{hero.content}</div>
      <div id="about">{about.content}</div>
      <div id="experience">{experience.content}</div>
      <div id="projects" className="bg-base-200">
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16 md:mx-60">{postPreviews}</div>
      </div>
      <div id="skills">{skills.content}</div>
    </main>
  );
};

export default HomePage;