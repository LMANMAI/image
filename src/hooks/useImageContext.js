import React, {useState, createContext, useEffect} from 'react';

export const ImageContext = createContext();
const ImageProvider = (props) =>{
    //states del Context
    const [ state, setState ] = useState('');
    const [ result, setResult ] = useState([]);
    const [ historial, setHistorial ] = useState([]);
    //states del paginador
    const [pages, setPages ] = useState(1);
    const [totalpaages, setTotalPages ] = useState(1)
    //state del hastag
    const [tag, setTagSearch ] = useState('');

    //hacer la consulta a la api 
    useEffect(()=>{
        if(state === '') return;
            const consultaApi = async () =>{
                const porPag = 15;
                const apiKEY = `19481418-e1589af79378122d7dd026a5d`;
                const url = `https://pixabay.com/api/?key=${apiKEY}&q=${state}&per_page=${porPag}&page=${pages}`;
                const consulta = await fetch(url);
                const resultado = await consulta.json();
                setResult(resultado.hits);
                setTotalPages(Math.ceil(resultado.totalHits / porPag));
            }
            
        consultaApi();
        const wrap = document.querySelector('.wrap');
        wrap.scrollIntoView({behavior: 'smooth'});
        
    }, [state,pages]);

    const paginaAnterior = ()=>{
        const setpaginaactual = pages -1;
        if(setpaginaactual === 0) return;
        setPages(setpaginaactual);
    }
    const paginaSiguiente = ()=>{
        const setpaginaactual = pages + 1;
        if(setpaginaactual > totalpaages) return;
        setPages(setpaginaactual);
             }
   
    return(
        <ImageContext.Provider
            value={{
                //datos que tengo que pasar en este caso las imagenes
                state,
                result,
                historial,
                pages,
                totalpaages,
                setState,
                paginaAnterior,
                paginaSiguiente,
                setTagSearch
            }}
        >
            {props.children}
        </ImageContext.Provider>
    )
} 
export default ImageProvider;