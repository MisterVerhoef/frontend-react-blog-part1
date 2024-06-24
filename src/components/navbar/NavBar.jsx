import './NavBar.css'
import {NavLink, useLocation,} from "react-router-dom";
import navBarLogo from "../../assets/logo-medium.png";
import {useEffect, useState} from "react";

function NavBar() {

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    return (
            <header>

                <nav>
                    <div className = "nav-container" >
                    <span>
                <img src={navBarLogo} alt="Logo"/>
            </span>
                    <ul>
                        <li>
                            <NavLink to="/" className={currentPath === '/' ? 'active' : 'inactive'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts" className={currentPath === '/posts'  ? 'active' : 'inactive'}>Alle Posts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts/new" className={currentPath === '/posts/new' ? 'active' : 'inactive'}>Nieuwe Post Aanmaken</NavLink>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>
)
}

export default NavBar;