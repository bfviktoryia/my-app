import React from 'react';
import { ReactComponent as LogoIcon} from "../../assets/logo.svg";
import useTranslate from '../hooks/useTranslate';
import Theme from './theme/Theme';
import Button from '../ui/Button';

import './Header.scss';

type HeaderType = {
  children: React.ReactNode;
};

const Header = ({ 
     children 
    }: HeaderType) => {

      const { lang, setLang } = useTranslate();


  return (
    <header className="header_style">
        <div className="logo-wrap">
            <LogoIcon className="logo-wrap-icon"/>
            <div className="logo-wrap-name">
                Open art                
            </div>
        </div>
        {children}
        {lang === "en" 
                ?
                <Button style="transparent" onClick={() => setLang("ru")}>
                      ru        
                </Button> 
                :
                <Button style="transparent" onClick={() => setLang("en")}>
                      en      
              </Button>
          }
        <Theme/>
      
    </header>
  );
};

export default Header;
