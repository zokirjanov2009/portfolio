import "./Product.css"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"
import img7 from "../../assets/img7.png"
import img8 from "../../assets/img8.png"
const Product = () => {
    return (
        <div>
            <div className="products">
                <div className="product-text">
                    <h3>PRODUCT DESIGNER</h3>
                    <h1>That's me!</h1>
                    <p>Over the past 12 years, I've worked with a diverse range of <br /> clients, from startups to Fortune 500 companies. I love crafting <br /> interfaces that delight users and help businesses grow.</p>
                </div>
                <div className="product-image">
                    <div className="img-1">
                        <img src={img5} alt="" />
                    </div>
                    <div className="img-2">
                        <img src={img6} alt="" />
                    </div>
                    <div className="two-img">
                        <div className="img-3">
                            <img src={img7} alt="" />
                        </div>
                        <div className="img-4">
                            <img src={img8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Product
