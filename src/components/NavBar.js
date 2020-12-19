import React, { useState, useContext } from 'react';
import { ImageContext } from '../hooks/useImageContext';
import styled from '@emotion/styled'
//styled components
const Header = styled.div`
    height: 50px;
    width: 100%;
    padding: 2px;
    background-color: #2A9D8F;
    display: flex;
    align-items: center;
`;
const Formulario = styled.form`
    display: flex;
    padding: 5px;
`;

const NavBar = ({SetError}) => {
    const { setState } = useContext(ImageContext);
    const [ search, setSearch ] = useState('');
    const handleSubmit = evt =>{
        evt.preventDefault();
        if(search === ''){
            SetError(true);
            return;
        }
        setState(search);
        SetError(false);
    }
  
    return ( 
        <Header>
            <div className="wrap">
                <Formulario onSubmit={handleSubmit}>
                   <div className="input_field">
                     <input 
                        type="text"
                        placeholder="Ej: Café"
                        className="input"
                        onChange={e=>setSearch(e.target.value)}
                    />
                   </div>
                   <input
                        type="submit"
                        value="Q"
                        className="btn btn-submit"
                    />
                </Formulario>
                
            </div>
        </Header>
     );
}
 
export default NavBar;