import React from 'react'
import './MainPage.css'
import {LoginComponent} from 'components/Login'

{/* Talvez ter um for aqui que vai gerando uma main com varios componentes? Ver como funciona no react */ }
const MainPage = () => (
    <React.Fragment>
        <LoginComponent></LoginComponent>
    </React.Fragment>
);

export default MainPage;