import "../navigation/Navbar.scss"

type NavigationType = {
    
}

const Navbar: React.FC<NavigationType> = () => {
return (
    <div className="navigation-wrap">
        <ul className="navigation-list">    
            <li className="navigation-list-item navigation_gallery">Gallery</li>
            <li className="navigation-list-item navigation_favourites">Favourites</li>
            <li className="navigation-list-item navigation_registration">Registration</li>
            <li className="navigation-list-item navigation_login">Login</li>
        </ul>
    </div>
)
}



export default Navbar;

