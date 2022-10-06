
import { NavLink } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

import "../navigation/Navbar.scss"
import Button from "../../ui/Button";

type NavigationType = {}

const GalleryLinks = [
    {url: "gallery", textId: "navbar.gallery"},
    {url: "favourite", textId: "navbar.favourites"},
    {url: "login", textId: "navbar.login"},
    {url: "registration", textId: "navbar.registration"},
]

const Navbar: React.FC<NavigationType> = () => {

    const { t } = useTranslate();
    const [isNavResponsive, setIsResponsive] = useState(false);

    const handleClick = () => {
        setIsResponsive(!isNavResponsive);
    }
    const hideNavResponsive = () => setIsResponsive(false);


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
                    <ul
                        className = {isNavResponsive ? "navigation-list expanded_responsive" : "navigation-list expanded"}
                    >
                            {GalleryLinks.map(({ url, textId}) =>
                                <li key={url}>
                                    <NavLink to={url} 
                                    onClick={hideNavResponsive}
                                    className={({ isActive }) => (`gallery-navigation-link ${isActive ? "active-gallery" : ""}`)}>
                                        {t(textId)}
                                    </NavLink>
                                </li>
                        )}
                    </ul> 
            </div>
)
}



export default Navbar;
