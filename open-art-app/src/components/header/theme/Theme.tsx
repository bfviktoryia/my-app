import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as ThemeToggleIcon} from "../../../assets/circle-half-stroke-solid.svg";
import Storage  from "../../../helpers/storage"
import { useActions } from "../../hooks/useActions";
import Button from "../../ui/Button";

// import "../navigation/Navbar.scss";
import "../theme/Theme.scss";


const Theme: React.FC = () => {

    const [_, setTheme] = useState<string>();
    useEffect(() => {
        const storageTheme = Storage.getFromStorage<string | undefined>("theme", undefined);
        if(storageTheme){
            document.body.dataset.theme = storageTheme;
            setTheme(storageTheme)
        }
    },[])

    const theme = useSelector((state: any) => state.cards.theme);
    const { toggleTheme } = useActions();

    const handleClick = () => {
        toggleTheme();
    }

        return (
            <div className="theme-button-wrap">
                <Button 
                    style="transparent-theme" 
                    onClick={handleClick}>
                        {theme}
                        <ThemeToggleIcon className="toggle-theme-icon"/>

                </Button>
            </div>

)
}



export default Theme;