import React from 'react';

export const PhotoFrame = ({url, title}) => {
   return (
    <>
      <div className="photoframe">
        <img src={url} alt="noimage"/>
      </div>
      <div className="caption">
         <p>{title}</p>
      </div>
    </>
   )
}
