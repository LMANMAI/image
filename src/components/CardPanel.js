import React, {Fragment, useContext} from 'react';
//importo el context
import { ImageContext } from '../hooks/useImageContext';
import Card from './Card';

const CardPanel = () => {
    const { result, paginaAnterior,paginaSiguiente, pages, totalpaages, setTag } = useContext(ImageContext);
   // const resultArray = result;
    //logica de los botones
    
    return ( 
     <Fragment>
         <div  className="card_panel">
          <div className="wrap_card">
           {result.map(resulta =>(
                         <Card 
                              key={resulta.id}
                              resulta={resulta}
                              setTag={setTag}
                         />
                    ))}
                    
               </div>
        </div>
         <div className="btn_container">

               {(pages === 1) ?null :(
                    <button
                    className="btn_page"
                    onClick={paginaAnterior}
               >Anterior</button>
               )}

               {(pages === totalpaages) ?null :(
                    <button
                    className="btn_page"
                    onClick={paginaSiguiente}
          >Siguiente</button>
               )}
          </div>
</Fragment>
     );
}
 
export default CardPanel;