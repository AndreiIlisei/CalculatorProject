import React from 'react';
import './App.css';
import Calculator from './components/Calculator'
import styled from 'styled-components';

const Container = styled.div`
background: #323232;
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
flex-direction: column;
`;


function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
