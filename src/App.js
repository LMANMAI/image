import React from 'react';
import styled from '@emotion/styled';
//importo el context 
import ImageProvider from './hooks/useImageContext';

//importo componentes
import NavBar from './components/NavBar';
import CardPanel from './components/CardPanel';
import History from './components/History';

const HistoryContainer = styled.div`
    height: 30px;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
`;

function App() {
 
  return (
   <ImageProvider>
      <NavBar />
    
      <HistoryContainer>
        < History/>
      </HistoryContainer>
      <CardPanel />    
   </ImageProvider>
  );
}

export default App;
