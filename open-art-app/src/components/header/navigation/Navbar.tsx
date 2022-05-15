
import { Link } from "react-router-dom";

import "../navigation/Navbar.scss"

type NavigationType = {
    
}

const Navbar: React.FC<NavigationType> = () => {
return (
    <div className="navigation-wrap">
        <ul className="navigation-list">    
            <li className="navigation-list-item navigation_gallery">
                  <Link to="/gallery">Gallery</Link>
            </li>
            <li className="navigation-list-item navigation_favourites">
                  <Link to="/#">Favourites</Link>
            </li>
            <li className="navigation-list-item navigation_registration">
                  <Link to="/#">Registration</Link>
            </li>
            <li className="navigation-list-item navigation_login">
                   <Link to="/login">Login</Link>
            </li>
        </ul>
    </div>
)
}



export default Navbar;

