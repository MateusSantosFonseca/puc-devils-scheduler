import React from 'react'
import './HeaderContainer.css'

const HeaderContainer = () => (
    <header className="HeaderContainer">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <a href="#" className="nav-nome">
                        Minas Devils - Scheduler</a>
                    {/* Aqui tem que ter mais um <a> se for usuario logado, se for, aparece um button com o "+" pra redirecionar pro CRUD de partida */}
                </div>
            </div>
        </div>
    </header>
);

export default HeaderContainer;