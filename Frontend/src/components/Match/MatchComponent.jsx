// @flow
import React from 'react';
import './MatchComponent.css';

const MatchComponent = props => props.matches.map(match => (
    <div className="card my-4">
        <div className="card-body">
            <div className="titulo-partida">
                <h5 className="card-title text-center">Devils Minas vs {match.timeAdversario}</h5>
                <div className="logos-e-lineups mt-4">
                    <div className="row">
                        <div className="col-md-3 d-inline">
                            <img className="logo logo-devils mx-4" alt="Logo da PUC Minas Devils" src={match.logoPuc}></img>
                        </div>
                        <div className="lineup col-md-6 d-inline mt-2">
                            <p className="label-lineup float-right">newba 1</p>
                            <p className="label-lineup">atokzz</p>
                            <p className="label-lineup float-right">newba 2</p>
                            <p className="label-lineup">th1</p>
                            <p className="label-lineup float-right">newba 3</p>
                            <p className="label-lineup">-rk</p>
                            <p className="label-lineup float-right">newba 4</p>
                            <p className="label-lineup">LNd</p>
                            <p className="label-lineup float-right">newba 5</p>
                            <p className="label-lineup">ianzin</p>
                        </div>
                        <div className="col-md-3 d-inline">
                            <img className="logo logo-adversario mx-4" alt="Logo do time adversário" src={match.logoTimeAdversario}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 text-center">
                    <label>Partida <strong className="dificuldade-cor">difícil</strong></label>
                </div>
                <div className="col-md-4 text-center">
                    <label>23/04/2020 - 23:00</label>
                </div>
                <div className="col-md-4 text-center">
                    <label>Gamersclub</label>
                </div>
            </div>
        </div>
        <a href="#" className="btn btn-danger">Link partida</a>
    </div>))

export default MatchComponent;