import Button from "./Button";
import { ReactComponent as BackToGalleryIcon} from "../../assets/arrow-thin-left-icon.svg";
import { useNavigate } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";

import "./BackToGalleryButton.scss"


type PropsType = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

 const BackToGallery: React.FC<PropsType> = () => {

        const { t } = useTranslate();
        const navigate = useNavigate();

        const handleClick = () => {
            // console.log("clicked back to gallery");
            // navigate(-1);
            navigate("/gallery");
        }

        return (
            <div className="cards-button-wrap">
                <Button style="transparent"
                        onClick={handleClick}
                >
                        <BackToGalleryIcon className="back-arrow-icon"/>
                        {t("back.to.gallery")}
                </Button>
            </div>
        )

}

export default BackToGallery;