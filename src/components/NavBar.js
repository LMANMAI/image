import React from 'react';
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

const ContainerForm = styled.div`
    width: 80%;
    margin: 0 auto;
    
`;
const Formulario = styled.form`
    display: flex;
    padding: 5px;
`;


const NavBar = () => {
    return ( 
        <Header>
            <ContainerForm>
                <Formulario>
                   <div className="input_field">
                     <input 
                        type="text"
                        placeholder="Ej: Café"
                        className="input"
                    />
                   </div>
                   <input
                        type="submit"
                        value="Buscar!"
                        className="btn btn-submit"
                    />
                </Formulario>
            </ContainerForm>
        </Header>
     );
}
 
export default NavBar;