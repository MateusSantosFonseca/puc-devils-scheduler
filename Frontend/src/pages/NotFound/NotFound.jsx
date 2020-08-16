import React from 'react'
import './NotFound.css'
import notFoundImage from './../../assets/404_found.png'
import HeaderContainer from 'containers/Header/HeaderContainer'

const NotFound = () => (
    <React.Fragment>
        <HeaderContainer></HeaderContainer>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center NotFound">
                    <img src={notFoundImage} alt="Página não encontrada" />
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default NotFound;