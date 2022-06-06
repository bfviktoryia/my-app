
import { NavLink } from "react-router-dom";

import "../navigation/Navbar.scss"

type NavigationType = {
}

const GalleryLinks = [
    {url: "gallery", textId: "navbar.gallery"},
    {url: "#", textId: "navbar.favourites"},
]
const AuthLinks = [
    {url: "registration", textId: "navbar.registration"},
    {url: "login", textId: "navbar.login"},
]

const Navbar: React.FC<NavigationType> = () => {
return (
    <div className="navigation-wrap">
            <ul className="navigation-list gallery">
                    {GalleryLinks.map(({ url, textId}) =>
                        <li key={url}>
                            <NavLink to={url} className={({ isActive }) => (`gallery-navigation-link ${isActive ? "active-gallery" : ""}`)}>
                                {textId}
                            </NavLink>
                        </li>
                )}
            </ul> 

            <ul className="navigation-list auth">
                        {AuthLinks.map(({ url, textId}) =>
                            <li key={url}>
                            <NavLink to={url} className={({ isActive }) => (`auth-navigation-link ${isActive ? "active-auth" : ""}`)}>
                                {textId}
                            </NavLink>
                        </li>
                )}
            </ul> 
    </div>
)
}



export default Navbar;