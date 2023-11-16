import Link from "next/link";
import GetPostMetaData from "../../components/GetPostMetaData";
import PostPreview from "../../components/PostPreview";

const hero = {
  content: (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.imgur.com/3CLQrIC.jpg)'}}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-accent">
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
        <img src="https://i.imgur.com/gBAboXp.png" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Hey I'm Cynthia!</h1>
          <p className="py-6">
            B.S <a href="https://mae.ucsd.edu/undergrad" className="underline underline-offset-4 decoration-accent 
            hover:text-accent">Mechanical Engineering </a>with a Specialization in Robotics and Controls.</p>
          <p>
            I'm a recent graduate 
            from <a href="https://ucsd.edu/" className="underline underline-offset-4 decoration-accent 
            hover:text-accent">UC San Diego</a>.
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
      <div className="mx-auto px-40 pb-16 bg-base-300">
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold">Experience</h1>
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Aug 2021 - Aug 2022</time>
              <div className="text-xl font-black"><a href="http://gravishlab.ucsd.edu/" className="underline underline-offset-4 decoration-secondary hover:text-secondary">Gravish Lab (UCSD)</a></div>
              <p className="text-lg italic">Undergraduate Student Researcher</p>
              <p>
                Crafted an inaugural research proposal by delving into past designs of biomimetic swimming robots.
                Oversaw the design and fabrication processes of a swimming robot.
                Applied Fusion 360 for the creation of 3D printed components and employed a laser cutter for precision cutting of acrylic parts.
              </p>
            </div>
            <hr/>
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">May 2021 - Aug 2021</time>
              <div className="text-xl font-black"><a href="https://morimotolab.eng.ucsd.edu/" className="underline underline-offset-4 decoration-secondary hover:text-secondary">Morimoto Lab - Contextual Robotics Institute (UCSD)</a></div>
              <p className="text-lg italic">Undergraduate Student Researcher</p>
              <p>
                Led the enhancement of the Laparoscopic Training Device (LTD) through strategic design management.
                Employed SolidWorks to create cost-effective 3D printed components for the LTD.
                Developed expertise in rapid prototyping with a focus on optimizing cost-efficiency. 
              </p>
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Jan 2021- Jun 2023</time>
              <div className="text-xl font-black"><a href="https://jacobsschool.ucsd.edu/idea/" className="underline underline-offset-4 decoration-secondary hover:text-secondary">UCSD IDEA Center</a></div>
              <p className="text-lg italic">Program Assistant</p>
              <p>
                Offered administrative assistance for the <a href="https://jacobsschool.ucsd.edu/idea/admitted-undergraduates/aces" className="underline underline-offset-4 decoration-accent font-semibold hover:text-accent">Academic Center for Engineering Success Program (ACES)</a> and 
                the <a href="https://jacobsschool.ucsd.edu/idea/current-undergraduates/ELC" className="underline underline-offset-4 decoration-accent font-semibold hover:text-accent">Engineering Learning Communities (ELC).</a> Conveyed vital administrative details to 12 
                peer educators and 77 ACES Scholars.
                Directed the coordination and scheduling of meetings, workshops, and social events for both peer educators and scholars.
              </p>
            </div>
            <hr/>
          </li>
          <li>
            <hr/>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Sept 2018 - May 2019</time>
              <div className="text-xl font-black"><a href="https://www.palomartechnologies.com/" className="underline underline-offset-4 decoration-secondary hover:text-secondary">Palomar Technologies</a></div>
              <p className="text-lg italic">Intern</p>
              <p>
                Devised a measurement procedure for proxy dots produced by the <a href="https://www.palomartechnologies.com/product/9000-wedge-bonder" className="underline underline-offset-4 decoration-accent font-semibold hover:text-accent">9000 Wedge Bonder</a>, 
                employing the <a href="https://www.keyence.com/products/microscope/digital-microscope/vhx-1000/models/vhx-1000e/" className="underline underline-offset-4 decoration-accent font-semibold hover:text-accent">Keyence VHX-1000 digital microscope. </a>
                Acquired proficiency in fundamental programming functions for wire bonding on the 9000 Wedge Bonder.
                Conducted pixel calibration data acquisition and analysis for three distinct types of die bonding machines spanning three years, aimed at identifying the causes of machine calibration failures.
                Shadowed electrical and mechanical engineers addressing challenges on the new <a href="https://www.palomartechnologies.com/product/6532hp-die-bonder font-semibold" className="underline underline-offset-4 decoration-accent font-semibold hover:text-accent">6532HP die bonder.</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    ),
};

const skills = {
  content: (
    <div className="mx-auto px-40 bg-base-300">
      <div className="text-center py-16">
          <h1 className="text-5xl font-bold">Skills</h1>
      </div>

      <div className="flex flex-col w-full pb-12">
        <div className="flex flex-row justify-center px-4 py-4 gap-6">
          <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img src="https://i.imgur.com/gXDtLfNm.png" alt="clock" /></figure>
            <div className="card-body">
              <h2 className="card-title">Mechanical Clock</h2>
            </div>
          </div>
          <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img src="https://i.imgur.com/JzGyIQ5m.png" alt="chess" /></figure>
            <div className="card-body">
              <h2 className="card-title">Unique Chess Piece</h2>
            </div>
          </div>
        </div>

        <div className="divider divider-neutral"></div>

        <div className="px-4 py-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Hardware</th>
                <th>Computer Aided Design</th>
                <th>Fabrication</th>
                <th>Software</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Arduino</td>
                <td>Inventor</td>
                <td>3D Printing</td>
                <td>Matlab</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th></th>
                <td>SolidWorks</td>
                <td>Soldering</td>
                <td>Python</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th></th>
                <td>Fusion 360</td>
                <td>Laser Cutting</td>
                <td>Excel</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th></th>
                <td></td>
                <td>GD&T</td>
                <td>Powerpoint</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="divider divider-neutral"></div>

        <div className="px-4 py-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Certificate</th>
                <th>Distributor</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Introduction to Fusion 360</td>
                <td>Solidprofessor</td>
                <td>Jul 2020</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Fusion 360 Drawings</td>
                <td>Solidprofessor</td>
                <td>Jul 2020</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Inventor Beginner to Certification</td>
                <td>Solidprofessor</td>
                <td>Jul 2020</td>
              </tr>
              {/* row 4 */}
              <tr>
                <td>Inventor Drawings</td>
                <td>Solidprofessor</td>
                <td>Aug 2020</td>
              </tr>
            </tbody>
          </table>
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
    <div>
      <div id="home">{hero.content}</div>
      <div id="about">{about.content}</div>
      <div id="experience">{experience.content}</div>
      <div id="projects" className="mx-auto px-20 bg-base-200">
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-16">{postPreviews}</div>
      </div>
      <div id="skills">{skills.content}</div>
    </div>
  );
};

export default HomePage;