
import { NavLink } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

import "../navigation/Navbar.scss"
import Button from "../../ui/Button";

type NavigationType = {
}

const GalleryLinks = [
    {url: "gallery", textId: "navbar.gallery"},
    {url: "favourite", textId: "navbar.favourites"},
    {url: "login", textId: "navbar.login"},
    {url: "registration", textId: "navbar.registration"},
]
// const AuthLinks = [
//     {url: "registration", textId: "navbar.registration"},
//     {url: "login", textId: "navbar.login"},
// ]

const Navbar: React.FC<NavigationType> = () => {

    const { t } = useTranslate();
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleClick = () => {
        setIsNavExpanded(!isNavExpanded);
    }

        return (
            <div className="navigation-wrap">
                    <div className="menu-hamburger-wrap">
                        <Button 
                                style="transparent-lang"
                                onClick={handleClick}
                                >
                            <MenuIcon className="menu-hamburger"/>
                        </Button>
                    </div>

                    <ul className = {isNavExpanded ? "navigation-list expanded_responsive" : "navigation-list expanded"}>
                            {GalleryLinks.map(({ url, textId}) =>
                                <li key={url}>
                                    <NavLink to={url} 
                                    onClick={handleClick}
                                    className={({ isActive }) => (`gallery-navigation-link ${isActive ? "active-gallery" : ""}`)}>
                                        {t(textId)}
                                    </NavLink>
                                </li>
                        )}
                    </ul> 

                    {/* <ul className="navigation-list auth">
                                {AuthLinks.map(({ url, textId}) =>
                                    <li key={url}>
                                    <NavLink to={url} className={({ isActive }) => (`auth-navigation-link ${isActive ? "active-auth" : ""}`)}>
                                        {t(textId)}
                                    </NavLink>
                                </li>
                        )}
                    </ul>  */}
            </div>
)
}



export default Navbar;

