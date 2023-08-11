import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-color">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">TaazaKhabar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button class="btn drop dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories 
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li className="dropdown-item"><Link className="nav-link" to="/business">Business</Link></li>
                                    <li className="dropdown-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                    <li className="dropdown-item"><Link className="nav-link" to="/general">General</Link></li>
                                    <li className="dropdown-item"><Link className="nav-link" to="/health">Health</Link></li>
                                    <li className="dropdown-item"><Link className="nav-link" to="/science">Science</Link></li>
                                    <li className="dropdown-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                    <li className="dropdown-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar