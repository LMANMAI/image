import React, {useContext} from 'react';
//importo el context
import { ImageContext } from '../hooks/useImageContext';

import Card from './Card';

const CardPanel = () => {
    const { state } = useContext(ImageContext);
    console.log(state);
    return ( 
        <>
        <p>sdfsdf</p>
        <Card />
        </>
     );
}
 
export default CardPanel;