import { GrLinkedin, GrGithub } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import assets from "./assets/react-homepage-screenshot.png";
import './App.css';
import { FaHtml5,FaReact,FaAngular,FaNodeJs,FaGitAlt,FaFigma } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io"
import { SiJavascript,SiPostgresql,SiPostman,SiTailwindcss } from "react-icons/si"
import { BsBootstrapFill } from "react-icons/bs";
import fhatuPic from './assets/photo2.jpg';
import fhatuCV from './assets/Fhatuwani_Martin_Raphalalani_CV.pdf';
import laptopBg from './assets/laptop-bg.jpg';


function App() {
  return (
    <>
   <h1>Hello World</h1>

   <section className="hero">
      <div className="hero min-h-screen heroDiv" >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-9xl">
              <h1 className="mb-2 text-5xl font-bold">Hello There!</h1>
              <p className="mb-2">I am Fhatuwani Raphalalani</p>
              <p>Full Stack Software Developer</p>
              <button className="btn btn-primary bg-green-200 p-4 rounded-2xl">Explore More</button>
            </div>
          </div>
      </div>
   </section>

   <section className="w-full glass p-4 aboutDiv">

      <div className="card lg:card-side bg-pink-100 shadow-2xl flex flex-row p-3 w-fit rounded-lg">
        <img src={fhatuPic} alt="Album" className="w-1/3 h-1/3 p-1 rounded-lg"/>
        <div className="card-body p-4 h-auto">
          <h2 className="card-title text-center p-5 text-4xl font-bold">A Bit About Me.</h2>
          <p> I am a full stack software developer with 1 year of working experience in fields like frontend, backend, databases and APIs. I combine my interpersonal skills with technical skills and fully commit to consistency in meeting deadlines. I utilize all available resources and learn new technologies to achieve results. I enjoy creating beautiful, accessible, and responsive websites using HTML, CSS, Bootstrap, Angular, SCSS, Vanilla JavaScript, and React. Effective use of time, problem-solving and communication skills help me show a positive attitude in complex situations. I have passion for learning and my desire to learn quickly adapts me to changing situations.</p>
          <div>
            
          <div className="flex flex-col w-full lg:flex-row gap-2 mt-1">

                <div className="grid flex-grow h-80 card bg-blue-300 rounded-lg place-items-center ">
                    <h3 className="card-title text-center p-3 text-4xl font-bold">Current Position.</h3>
                    <ul className="text-center text-2xl">
                        <li>The Digital Academy</li>
                        <li>Full Stack Software Developer</li>
                        <li>Started June 2022</li>
                        <li>Auckland Park, Gsuteng</li>
                    </ul>  
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow h-80 card bg-blue-300 rounded-lg place-items-center">
                <h3 className="card-title text-center p-3 text-4xl font-bold">Education.</h3>
                    <ul className="text-center text-2xl">
                        <li>University of Limpopo</li>
                        <li>BSc Mathematical Sciences</li>
                        <li>Graduated 2020</li>
                        <li>Polokwane, Limpopo</li>
                    </ul>  
                </div>
          </div>
            
          </div>
          <div className="card-actions mt-2 flex bg-green-200 w-fit align-end rounded-lg downloadBtn relative bottom-0 left-0">
            <a href={fhatuCV} download="Fhatuwani-Raphalalani" className="btn btn-primary w-fit bg-lg rounded p-2">
              Download CV
            </a>
          </div>
        </div>
      </div>

   </section>

   <section className="w-full glass p-4 skillsDiv">

      <div className="flex flex-col w-full lg:flex-row p-4 text-3xl gap-4">
          <div className="grid flex-grow h-64 card bg-purple-300 rounded-box place-items-center rounded-lg">
            <ul>
              <li className="flex flex-row justify-start gap-8"><FaHtml5 style={{fill: "#E65100"}}/> <span>HTML5</span></li>
              <li className="flex flex-row justify-start gap-8"><BsBootstrapFill style={{fill: "#673AB7"}}/> <span>Bootstrap</span></li>
              <li className="flex flex-row justify-start gap-8"><IoLogoCss3 style={{fill: "#0277BD"}}/> <span>CSS3</span></li>
              <li className="flex flex-row justify-start gap-8"><SiTailwindcss style={{fill: "#00ACC1"}}/> <span>Tailwind CSS</span></li>
              <li className="flex flex-row justify-start gap-8"><SiJavascript style={{fill: "#FFD600"}}/> <span>JavaScript ES6+</span></li>
              <li className="flex flex-row justify-start gap-8"><FaReact style={{fill: "#80DEEA"}}/> <span>React.js</span></li>
            </ul>
          </div> 
          <div className="divider lg:divider-horizontal"></div> 
          <div className="grid flex-grow h-64 card bg-purple-300 rounded-box place-items-center gap-28 rounded-2xl">
            <ul>
              <li className="flex flex-row justify-start gap-6"><FaAngular style={{fill: "#DD2C00"}}/> <span>Angular</span></li>
              <li className="flex flex-row justify-start gap-6"><FaNodeJs style={{fill: "#388E3C"}}/> <span>Node.js</span></li>
              <li className="flex flex-row justify-start gap-6"><SiPostgresql style={{fill: "#0277BD"}}/> <span>Postgresql</span></li>
              <li className="flex flex-row justify-start gap-6"><SiPostman style={{fill: "#f76836"}}/> <span>Postman</span></li> 
              <li className="flex flex-row justify-start gap-6"><FaGitAlt style={{fill: "#F4511E"}}/> <span>Git</span></li>
              <li className="flex flex-row justify-start gap-6"><FaFigma style={{fill: "#E64A19"}}/> <span>Figma</span></li>
            </ul>
          </div>
      </div>
      
   </section>

   <section className="projectDiv w-full glass p-4 flex flex-row justify-center">
      <div className="card lg:card-side w-full bg-base-100 shadow-xl projectCard">
        <figure><img src={assets} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title p-2">ReactJS Portfolio Website</h2>
          <p className="p-2">Responsive portfolio website showcasing my skills and projects i have worked in. Built using reactjs, tailwind css.</p>
          <div className="card-actions flex justify-end">
            <a href="https://react-portfolio-online.vercel.app/" className="btn bg-lg bg-green-400 rounded p-2">Live Demo</a>
          </div>
        </div>
      </div>
   </section>

   <div className="contactDiv w-full glass p-4">

     
          <form className="contactform" action="https://formsubmit.co/fm.raphalalani29@gmail.com" method="POST">

            <div className="form-control w-full max-w-full flex flex-column flex-wrap gap-2 mt-4">
                <label className="label">
                  <span className="label-text">Name:</span>
                </label>
                <input type="text" placeholder="Enter your name" name="name" className="input input-md input-bordered bg-grey-200 w-full max-w-full rounded-lg p-2" />
            </div>
            <div className="form-control w-full max-w-full flex flex-column flex-wrap gap-2 mt-4">
                <label className="label">
                  <span className="label-text">Surname:</span>
                </label>
                <input type="text" placeholder="Enter your surname" name="surname" className="input input-bordered input-md w-full max-w-full rounded-lg p-2" />
            </div>
            <div className="form-control w-full max-w-full flex flex-column flex-wrap gap-2 mt-4">
                <label className="label">
                  <span className="label-text">Email Address:</span>
                </label>
                <input type="text" placeholder="Enter your email address" name="email" className="input input-md input-bordered w-full max-w-full rounded-lg p-2" />
                <input type="hidden" name="_subject" value="DaisyUI React Portfolio Message"></input>
            </div>
            <div className="form-control w-full max-w-full flex flex-column flex-wrap gap-2 mt-4">
                <label className="label w-full">
                  <span className="label-text">Message:</span>
                </label>
                <textarea className="textarea textarea-bordered textarea-md h-24 w-full rounded-lg p-2" name="message" placeholder="Enter your message"></textarea>
            </div>
            <button className="btn btn-success p-2 bg-lg bg-green-400 rounded mt-4" type="submit">Send Message</button>

          </form>

      
  </div>

   <footer className="footer footer-center p-8 bg-blue-200 text-base-content rounded">
      
      <div>
        <div className="flex flex-row justify-center gap-x-4">

          <a><GrLinkedin /></a>
          <a><GrGithub /></a>
          <a><FaFacebook /></a>

        </div>
      </div> 
      <div className="flex justify-center flex-row">
        <p>Copyright © 2022 - Created by Fhatuwani Raphalalani</p>
      </div>
    </footer>
</>
  );
}

export default App;
