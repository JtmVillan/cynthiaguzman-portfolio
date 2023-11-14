const hero = {
  content: (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Cynthia Guzman</h1>
          <p className="mb-5">Mechanical Engineer</p>
          <button className="btn btn-primary">Get Started</button>
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
          <p className="py-6">B.S Mechanical Engineering with a Specialization in Robotics and Controls.</p>
          <p>I'm a recent graduate from UC San Diego.
          </p>
          <p>Some of my hobbies include crocheting and roller skating.
          </p>
        </div>
      </div>
    </div>
  ),
};

const experience = {
    content: (
      <div className="mx-auto px-40">
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

const projects = {
  content: (
    <div className="mx-auto px-6">
      <div className="text-center py-9">
        <h1 className="text-5xl font-bold">Projects</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div id="project-music" className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img className="h-48 w-96" src="https://i.imgur.com/vpQEhrGm.png" alt="music-device" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a className="link link-hover">3D Printed Embouchure Device for Woodwind Musicians</a>
                </h2>
                <p>Assistive device to support the creation of the embouchure for a patient with partial facialy palsy</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Student Team</div> 
                </div>
              </div>
            </div>
          </div>
          <div id="project-fish" className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl ">
              <figure><img className="h-48 w-96" src="https://i.imgur.com/xsn7jFym.png" alt="fish-robot" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a className="link link-hover">Biomimetic Swimming Robot</a>
                </h2>
                <p>Robot with a compliant tail, using a wheel and wire mechanism to change its curvature</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Student Team</div> 
                </div>
              </div>
            </div>
          </div>
          <div id="project-lapar" className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img className="h-48 w-96" src="https://i.imgur.com/FJnhxeIm.png" alt="lapar-device" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a className="link link-hover">Laparoscopic Training Device</a>
                </h2>
                <p>​The goal of this project was to improve a low-cost laparoscopic training device created by the Morimoto Lab.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Student Team</div> 
                </div>
              </div>
            </div>
          </div>
          <div id="project-football" className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl ">
              <figure><img className="h-48 w-96" src="https://i.imgur.com/VsAj9cUm.png" alt="football-device" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a className="link link-hover">Football Launcher</a>
                </h2>
                <p>Contraption capable of launching a football 99 yards.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Student Team</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  ),
};

const HomePage = () => {
  // const postMetaData = GetPostMetaData();
  // const postPreviews = postMetaData.map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));

  // return <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >{postPreviews}</div>;
  return (
    <>
      <div>
        <div>{hero.content}</div>
        <div>{about.content}</div>
        <div>{experience.content}</div>
        <div>{projects.content}</div>
      </div>
      
    </>
    
  );
};

export default HomePage;