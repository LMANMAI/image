import React, {useState}from 'react';
import styled from '@emotion/styled';
//importo el context 
import ImageProvider from './hooks/useImageContext';
//importo componentes
import NavBar from './components/NavBar';
import CardPanel from './components/CardPanel';
import Error from './components/Error';
function App() {
  const [error, SetError] =useState(false);
  return (
   <ImageProvider>
      <NavBar SetError={SetError}/>
       {error ?<Error mensaje='Es necesario que busques algo'/> :null}
      <CardPanel />    
   </ImageProvider>
  );
}

export default App;
