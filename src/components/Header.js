import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Paul</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="project">Projects</a>
                <a href="contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;