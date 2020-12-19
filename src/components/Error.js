import React from 'react';
import styled from '@emotion/styled';

const ErrorP = styled.p`
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    background-color: #E76F51;
    color: white;
    
`;
const Error = ({mensaje}) => {
    return ( 
        <ErrorP>{mensaje}</ErrorP>
     );
}
 
export default Error;