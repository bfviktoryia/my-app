import React, { useState } from 'react';
import { ReactComponent as PlaceholderIcon} from "../../assets/logo.svg";

import "../image/Image.scss"

type PropsType = {
  src?: string,
  className?: string,
};

const Image: React.FC<PropsType> = ({ src }) => {

  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };


return ( 
         <div className="card-image-content">
            {!!src && !error 
            ? 
            <div className="image-wrap">
                <img
                className="image"
                onError={onError}
                src={src}
                alt="card image"
                >
                </img>
            </div>    
            : 
                <div className="image image-placeholder">
                  <PlaceholderIcon/>
                </div>
              }
         </div>
         )
        }


export default Image;