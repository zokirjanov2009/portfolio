import React from 'react'
import "./Faq.css"
import Vector from "../../assets/vector.svg"
const Faq = () => {
  return (
    <div>
      <div className="big-faq">
        <div className="faq-text">
            <h3>FAQ</h3>
            <h1>Frequently asked questions</h1>
        </div>
        <div className="faq-main">
            <div className="faq-main-in">
                <div className="boks">
                    <h2>What type of projects do you take on?</h2>
                    <img src={Vector} alt="" />
                </div>
                <div className="boks">
                    <h2>What is your hourly rate?</h2>
                    <img src={Vector} alt="" />
                </div>
                <div className="boks">
                    <h2>What time-zone do you work in?</h2>
                    <img src={Vector} alt="" />
                </div>
                <div className="boks">
                    <h2>What is the typical timeline for a project?</h2>
                    <img src={Vector} alt="" />
                </div>
            </div>
            <div className="faq-main-in">
            <div className="boks">
                    <h2>How do you charge for projects ?</h2>
                    <img src={Vector} alt="" />
                </div>
                <div className="boks">
                    <h2>What does your design process look like?</h2>
                    <img src={Vector} alt="" />
                </div>
                <div className="boks">
                    <h2>What metrics do you use to measure success?</h2>
                    <img src={Vector} alt="" />
                </div>
                <div className="boks">
                    <h2>What if I need help after the project is complete?</h2>
                    <img src={Vector} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Faq;
