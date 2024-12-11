import React from 'react';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-danger">
            <div class="container-fluid">
                <img src="img/logo.png" className="d-block " width="120px"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" className="text-white"> Home</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#" className="text-white"> Room</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#" className="text-white"> Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;