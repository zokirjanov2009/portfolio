import "./Projects.css"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import next from "../../assets/next.svg"
import next2 from "../../assets/next2.svg"
const Projects = () => {
  return (
    <div>
      <div className="project">
        <div className="project-text">
          <p>PROJECTS</p>
          <h1>I bring results.</h1>
          <h1>My clients are proof.</h1>
          <button>View all projects</button>
        </div>
        <div className="project-images">
          <div className="box">
            <img src={img2} alt="" />
            <p>BRANDING</p>
            <h1>Soulful Rebrand</h1>
            <span>View Project</span>
          </div>
          <div className="box">
            <img src={img3} alt="" />
            <p>Product Design</p>
            <h1>Datadash Product design</h1>
            <span>View Project</span>
          </div>
          <div className="box">
            <img src={img4} alt="" width={370} height={300} />
            <p>Web Design</p>
            <h1>Maize Website Design</h1>
            <span>View Project</span>
          </div>
          <div className="btns">
            <button className="next"><img src={next2} alt="" /></button>
            <button className="next"><img src={next} alt="" /></button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Projects
