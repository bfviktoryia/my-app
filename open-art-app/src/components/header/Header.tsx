import React from 'react';// import useTranslate from "../hooks/useTranslate";
// import Button from "../ui/button/Button";
import { ReactComponent as LogoIcon} from "../../assets/logo.svg";

import './Header.scss';

type HeaderType = {
  text?: string;
  children: React.ReactNode;
};

const Header = ({ 
     text,
     children 
    }: HeaderType) => {

    // const { lang, setLang } = useTranslate();

  return (
    <header className="header_style">
      <div className="logo-wrap">
          <LogoIcon className="logo-wrap-icon"/>
          <div className="logo-wrap-name">
              Open art                
          </div>
      </div>
      {children}

    </header>
  );
};

export default Header;
