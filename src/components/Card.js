import React, { useState } from 'react';

const Card = ({resulta}) => {
    const { tags, largeImageURL, pageURL, imageHeight } = resulta; 
    const [ height, setHeight ] = useState();
    let arrayTags = [];
    arrayTags = tags.split([',']);


    
  

    return ( 
        <div className="card">
            <div className="card_image">
                <img src={largeImageURL} alt={tags}/>
            </div>
            <div className="card_body">
                {arrayTags.map( tag=> (
                        <span className="hashtag">#{tag}</span>
                ))}
            </div>
            <div className="card_footer">
            <input 
                type="submit"
                className="btn btn_vermas"
                value="ver original"
                /*{/* evento onclick que redireccione para el link }*/
            />
            <input 
                type="submit"
                className="btn btn_download"
                value="Descargar"
                /*{/* evento onclick que redireccione para el link }*/
            />
            </div>
            

        </div>
     );
}
 
export default Card;