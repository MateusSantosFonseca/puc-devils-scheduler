import React from 'react'
import './MainPage.css'
import MatchContainer from 'containers/Match/MatchContainer'
import HeaderContainer from 'containers/Header/HeaderContainer';

const MainPage = () => (
    <React.Fragment>
        <HeaderContainer></HeaderContainer>
        <MatchContainer></MatchContainer>
    </React.Fragment>
);

export default MainPage;