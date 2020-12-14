import React from 'react';
//importo el context 
import ImageProvider from './hooks/useImageContext';

//importo componentes
import NavBar from './components/NavBar';
import CardPanel from './components/CardPanel';

function App() {
 
  return (
   <ImageProvider>
      <NavBar />
      <CardPanel />    
   </ImageProvider>
  );
}

export default App;
