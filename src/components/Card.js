import React, { useState, useContext } from 'react';
import {ImageContext} from '../hooks/useImageContext';

const Card = ({resulta}) => {
    const { setTagSearch, setState } = useContext(ImageContext);
    const { tags, largeImageURL, pageURL, imageHeight } = resulta; 
    let arrayTags = [];
    arrayTags = tags.split([',']);
    
    return ( 
        <div className="card">
            <div className="card_image">
                    <a 
                    href={largeImageURL}
                    target="_blank"    
                    rel="noreferrer"            
                >
                        <img src={largeImageURL} alt={tags}/>
                    </a>
                </div>
            
            <div className="card_body">
                {arrayTags.map( tag=> (
                        <a onClick={()=>setState(tag)}  className="hashtag">#{tag}</a>
                ))}
            </div>
            <div className="card_footer">
           
            {/*<a 
                href={largeImageURL}    
                download={largeImageURL}     
                className="btn btn_vermas"
                target="_blank"
            >Ver Original</a>*/}
            
            </div>
            

        </div>
     );
}
 
export default Card;