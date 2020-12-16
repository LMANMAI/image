import React, {useContext} from 'react';
//importo el context
import { ImageContext } from '../hooks/useImageContext';
import Card from './Card';

const CardPanel = () => {
    const { result, historial } = useContext(ImageContext);
    const resultArray = result;
    
    return ( 
         <>
         <div className="wrap">
          <div className="card_panel ">
               {resultArray.map(resulta =>(
                    <Card 
                         key={resulta.id}
                         resulta={resulta}
                    />
               ))}
               
          </div>
          <button>boton</button>
          </div>
        </>
     );
}
 
export default CardPanel;