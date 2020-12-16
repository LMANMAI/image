import React, {useContext} from 'react';
import styled from '@emotion/styled'
import {ImageContext} from '../hooks/useImageContext';

const HashtagsContainer = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Parrafo = styled.p`
    align-self: center;
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
`;

const History = () => {
    const {historial} = useContext(ImageContext);
    return ( 
        <HashtagsContainer>
          {historial.length === 0 ?<Parrafo>Comienza buscando algo</Parrafo> :<Parrafo>Tus busquedas recientes: </Parrafo>}
        <div className="container_hashtags">
            {historial.map(history => (
                <span className="hashtag_history">#{history}</span> 
                ))}
        </div>
        </HashtagsContainer>
     );
}
 
export default History;