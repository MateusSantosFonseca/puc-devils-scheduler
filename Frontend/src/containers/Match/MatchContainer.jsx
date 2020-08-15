import React from 'react'
import './MatchContainer.css'
import MatchComponent from './../../components/Match/MatchComponent'

const logoDevils = "https://pbs.twimg.com/profile_images/919993547234869248/JyFgzt4U_400x400.jpg"
const logoAdversario = "https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-9/106712948_657478354839624_1012693006630242125_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeHw9miQJk4Pbp0_sfEEONR5SLVFsiH975BItUWyIf3vkDHUb0QuOeK8p3KaJAfwAX0ngD8tQ-d85tuLL0jm-n8j&_nc_ohc=mkyW186dvwIAX_Aci1l&_nc_ht=scontent.fplu3-1.fna&oh=69e2af36dad8c5b517e4595aac477539&oe=5F5B5823"

{/* Talvez ter um for aqui que vai gerando uma main com varios componentes? Ver como funciona no react */ }
const MatchContainer = () => {

    //Aqui eu faço as chamadas pro firebase retornando as partidas já cadastradas, array de exemplo abaixo das propriedades
    let matches = [{
        timePuc: 'Minas Devils', timeAdversario: 'Caaso', plataforma: 'Faceit', dificuldade: 'Médio', logoTimeAdversario: logoAdversario,
        jogadoresPuc: ['atokzz', 'th1', 'rk', 'ianzin', 'viol'], jogadoresAdversario: ['newb1', 'newb2', 'newb3', 'newb4', 'newb5'],
        linkPartida: 'https://github.com/MateusSantosFonseca', horarioPartida: '23/04/2020 - 23:00', logoPuc: logoDevils
    },
    {
        timePuc: 'Minas Devils', timeAdversario: 'Gay', plataforma: 'Faceit', dificuldade: 'Médio', logoTimeAdversario: logoAdversario,
        jogadoresPuc: ['atokzz', 'th1', 'rk', 'ianzin', 'viol'], jogadoresAdversario: ['newb1', 'newb2', 'newb3', 'newb4', 'newb5'],
        linkPartida: 'https://github.com/MateusSantosFonseca', horarioPartida: '23/04/2020 - 23:00', logoPuc: logoDevils
    },
    {
        timePuc: 'Minas Devils', timeAdversario: 'Caaso', plataforma: 'Faceit', dificuldade: 'Médio', logoTimeAdversario: logoAdversario,
        jogadoresPuc: ['atokzz', 'th1', 'rk', 'ianzin', 'viol'], jogadoresAdversario: ['newb1', 'newb2', 'newb3', 'newb4', 'newb5'],
        linkPartida: 'https://github.com/MateusSantosFonseca', horarioPartida: '23/04/2020 - 23:00', logoPuc: logoDevils
    }
    ];

    return (
        <div className="MatchContainer container">
            <div className="margem-header">
                <MatchComponent matches={matches} />
            </div>
            {/* Aqui vao ficar o container do mainpage, que seria os cards todos */}
        </div>
    );
}

export default MatchContainer;