import React from 'react'
import './MainPage.css'
import MatchContainer from './../../containers/Match/MatchContainer'

{/* Talvez ter um for aqui que vai gerando uma main com varios componentes? Ver como funciona no react */ }
const MainPage = () => (
    <React.Fragment>
        <MatchContainer></MatchContainer>
    </React.Fragment>
);

export default MainPage;