import "./Info.css"
import logo8 from "../../assets/logo8.svg"
import logo9 from "../../assets/logo9.svg"
import logo10 from "../../assets/logo10.svg"
const Info = () => {
    return (
        <div>
            <div className="all-info">
                <div className="education">
                    <h1>📚 Education</h1>
                    <div className="information">
                        <div className="mini-info">
                            <h2>Stanford University</h2>
                            <p>MSc (Human Computer Interaction)</p>
                            <span>• 2013-2015</span>
                        </div>
                        <div className="mini-info">
                            <h2>MIT Summer School</h2>
                            <p>UX Training Bootcamp</p>
                            <span>• 2013-2014</span>
                        </div>
                        <div className="mini-info">
                            <h2>California State University</h2>
                            <p>BSc in Software Engineering</p>
                            <span>• 2009-2012</span>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <h1>💼 Work Experience</h1>
                    <div className="inform2">
                        <div className="mini-info2">
                            <img src={logo8} alt="" />
                            <h2>SpaceFleet</h2>
                            <p>Senior Product Designer</p>
                            <span>• April 2019 - Current</span>
                        </div>
                        <div className="mini-info2">
                            <img src={logo9} alt="" />
                            <h2>MusicMash</h2>
                            <p>Information Architect</p>
                            <span>• April 2016 - May 2017</span>
                        </div>
                        <div className="mini-info2">
                            <img src={logo10} alt="" />
                            <h2>Kingdom</h2>
                            <p>UI Designer</p>
                            <span>• April 2016 - May 2017</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
