
import { NavLink } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";

import "../navigation/Navbar.scss"

type NavigationType = {
}

const GalleryLinks = [
    {url: "gallery", textId: "navbar.gallery"},
    {url: "favourite", textId: "navbar.favourites"},
    {url: "login", textId: "navbar.login"},
    {url: "registration", textId: "navbar.registration"},
]
const AuthLinks = [
    {url: "registration", textId: "navbar.registration"},
    {url: "login", textId: "navbar.login"},
]

const Navbar: React.FC<NavigationType> = () => {

    const { t } = useTranslate();

        return (
            <div className="navigation-wrap">
                    <ul className="navigation-list gallery">
                            {GalleryLinks.map(({ url, textId}) =>
                                <li key={url}>
                                    <NavLink to={url} className={({ isActive }) => (`gallery-navigation-link ${isActive ? "active-gallery" : ""}`)}>
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

