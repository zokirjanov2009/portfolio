import "./Testimonals.css"
import img9 from "../../assets/img9.png"
import log11 from "../../assets/log11.svg"
import next from "../../assets/next.svg"
import next2 from "../../assets/next2.svg"
const Testimonals = () => {
  return (
    <div>
      <div className="test">
        <div className="test-text">
          <h3>TESTIMONIALS</h3>
          <h1>Word on the street</h1>
        </div>
        <div className="main">
          <div className="main-img">
            <img src={img9} alt="" />
          </div>
          <div className="main-text">
            <img src={log11} alt="" />
            <h1>Jade helped us build a software so <br /> intuitive that it didn't need a <br /> walkthrough. He solved complex <br /> problems with brilliant design.</h1>
            <div className="main-text-bottom">
              <h2>John Frankin</h2>

              <div className="btn">
              <button><img src={next2} alt="" /></button>
              <button><img src={next} alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default Testimonals;