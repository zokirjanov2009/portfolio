import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <h1>Akbarjon</h1>
                </div>
                <div className="pages">
                    <ul>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                        <li>
                            <a href="/">Projects</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                        <li>
                            <a href="/">Book a call</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
