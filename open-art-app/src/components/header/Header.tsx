import React from 'react';
import { ReactComponent as LogoIcon} from "../../assets/logo.svg";
import useTranslate from '../hooks/useTranslate';
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
              <Button color="grey" onClick={() => setLang("ru")}>
                    ru        
              </Button> 
              :
              <Button color="grey" onClick={() => setLang("en")}>
                    en      
            </Button>
      }
    </header>
  );
};

export default Header;
