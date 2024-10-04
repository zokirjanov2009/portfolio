import "./Services.css"
import logo5 from "../../assets/logo5.svg"
import logo6 from "../../assets/logo6.svg"
import logo7 from "../../assets/logo7.svg"
const Services = () => {
    return (
        <div>
            <div className="service">
                <div className="service-text">
                    <h2>SERVICES</h2>
                    <h1>Design that solves problems, <br /> one product at a time.</h1>
                </div>
                <div className="columns">
                    <div className="column">
                        <img src={logo5} alt="" />
                        <h1>What I can do for you</h1>
                        <p>Faster, better products that your <br /> users love. Here's all the services I <br /> provide:</p>
                        <h4>* Design Strategy</h4>
                        <h4>* Web and Mobile App Design</h4>
                        <h4>* Front-end Development</h4>
                    </div>
                    <div className="column">
                        <img src={logo6} alt="" />
                        <h1>Applications I'm fluent in</h1>
                        <p>Every designer needs the right <br /> tools to do the perfect job. <br /> Thankfully, I'm multilingual.</p>
                        <h4>* Sketch</h4>
                        <h4>* Webflow</h4>
                        <h4>* Figma</h4>
                    </div>
                    <div className="column">
                        <img src={logo7} alt="" />
                        <h1>What you can expect</h1>
                        <p>I design products that are more <br /> than pretty. I make them shippable <br /> and usable.</p>
                        <h4>* Clean and functional</h4>
                        <h4>* Device and user friendly</h4>
                        <h4>* Efficient and maintainable</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;