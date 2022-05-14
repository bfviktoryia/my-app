import React, { useState } from 'react';
import { ReactComponent as PlaceholderIcon} from "../../assets/logo.svg";

import "../image/Image.scss"

type PropsType = {
  src?: string;
};

const Image: React.FC<PropsType> = ({ src }) => {

  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };


return ( 
         <div>
            {!!src && !error 
            ? 
                <img
                className="image"
                onError={onError}
                src={src}
                alt="card image"
                >
                </img>
            : 
                <div className="image image-placeholder">
                  <PlaceholderIcon/>
                </div>
              }
         </div>
         )
        }


export default Image;