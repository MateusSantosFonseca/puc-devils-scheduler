import React from 'react';
import HeaderContainer from './containers/Header/HeaderContainer'
import MainPage from './pages/MainPage/MainPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
