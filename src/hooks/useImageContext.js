import React, {useState, createContext} from 'react';

export const ImageContext = createContext();
const ImageProvider = (props) =>{
    const [ state, setState ] = useState('hola');
    return(
        <ImageContext.Provider
            value={{
                //datos que tengo que pasar en este caso las imagenes
                state
            }}
        >
            {props.children}
        </ImageContext.Provider>
    )
} 
export default ImageProvider;