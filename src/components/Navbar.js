import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <img src="img/logo.png" className="d-block" width="115px" alt="Logo" />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                                style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/room"
                                style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}
                            >
                                Room
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/contact"
                                style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
