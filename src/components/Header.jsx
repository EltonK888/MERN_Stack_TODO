import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">MERN To Do</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to="/edit/2">To Dos</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/create">Create a To Do</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Header;