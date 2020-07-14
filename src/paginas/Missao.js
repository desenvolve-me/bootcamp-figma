import React from 'react'
import ParagrafoEntitulado from '../components/ParagrafoEntitulado'
import Rodape from '../components/Rodape'



export default function Missao() {

    return (
        <div>
            <h1>Missão: Contribuir como um projeto open source</h1>
            <ParagrafoEntitulado titulo="Descrição"
                                paragrafo='Esta missão basicamente consiste em 
                                conribuir atéavés de código com um projeto open source. 
                                Existem vários projetos open source e você apende muito 
                                ao contribuir com um sistema de código aberto!'/>
            <ParagrafoEntitulado titulo="Recompensa" paragrafo="Essa Missão vale 10 pontos no ProgramaAção"/>
            <Rodape/>
        </div>        
    )
}