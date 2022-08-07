import React from "react";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='main--navbar'>   
            <i className="bi bi-code-slash icon--logo"></i>
            <div className='text--logo'>
                <h6>MARKDOWN PREVIEWER</h6>
                <p>Feel free to type</p>
            </div>
        </nav>
    )
} 