import "./Trust.css"
import logo1 from "../../assets/logo1.svg"
import logo2 from "../../assets/logo2.svg"
import logo3 from "../../assets/logo3.svg"
import logo4 from "../../assets/logo4.svg"
const Trust = () => {
  return (
    <div>
      <div className="trustby">
        <h3>Trusted by</h3>
        <div className="logolar">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Trust
