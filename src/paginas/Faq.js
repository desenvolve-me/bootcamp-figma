import React from 'react'
import ParagrafoEntitulado from '../components/ParagrafoEntitulado'
import Rodape from '../components/Rodape'

export default function Sobre (){
    return (
        <div className="container_root">
            <h1> Perguntas Frequentes </h1>
            
            <ParagrafoEntitulado titulo="O que é o ProgramaAção?" paragrafo= "O ProgramaAção é um jogo com objetivo de melhorar sua capacitação profissional como desenvolvedor. Esse jogo te dá missões  que devem ser cumpridas na vida real. A cada missão concluída você ganha uma quantia de pontos que podem variar de acordo com a complexidade e esforço para uma das missões."/>
            

            <ParagrafoEntitulado titulo="Para que servem os pontos?" paragrafo= "Os pontos serão usados na hora de selecionar os alunos para as indicações nas empresas. Se vários alunos tem o perfil buscado por uma empresa por exemplo, os que tem uma pontuação mais alta no ProgramaAção terão preferencia em toda a plataforma. Isso significa que quanto maior a sua pontuação maiores serão as suas chaces de ser indicado para uma vaga de emprego."/>
            
            
            <ParagrafoEntitulado titulo="Quem pode participar?" paragrafo= "Qualquer aluno da Desenvolve-me, ao inicar o programa de desenvolvimento já está participando do ProgramaAção automaticamente. Pessoas que não são alunos do programa de desenvolvimento não podem participar."/>
        
            <Rodape/>
        
        </div>)
}

