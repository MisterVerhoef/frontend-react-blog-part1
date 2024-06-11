import './NavBar.css'
import {NavLink} from "react-router-dom";

function NavBar() {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts">Alle Posts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts/new">Nieuwe Post Aanmaken</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default NavBar;