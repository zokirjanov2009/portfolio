import "./Home.css"
import img1 from "../../assets/img1.png"
const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="home-text">
                    <span>I design products</span>
                    <h1>that delight and inspire people.</h1>
                    <p>Hi! My name is Akbarjon, I'm a Web Developer. </p>
                    <button>Book a call</button>
                    <p className="t"><a href="/">Download CV</a></p>
                </div>
                <div className="home-img">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
