import React from 'react'


export default function HomeSection(props){
    return (

        <div className="container">
            <div className = 'esquerda'>
                <div className='texto_home'>    
                    <h1>Programação</h1>
                    <p>ProgramaAção é um jogo criado com objetivo
                        de ajudar pessoas na missão de entrar no 
                        mercado de desenvolvimento de software. 
                        Os jogadores recebem missões que precisam 
                        cumprir na vida real e assim acumular pontos. 
                        Para se formar no programa de desenvolvimento, 
                        é necessário um número mínimo de pontos no ProgramaAção, 
                        e por isso todos os estudantes deve participar do jogo.
                        Os pontos também serão utilizados no momento de buscar
                        candidatos para indicar para as empresas e, quanto mais
                        pontos maiores
                    </p>
            </div>
            </div>                
            <div className="direita">
                <img id='logo' src="https://desenvolve-me-bootcamp-recursos.s3-sa-east-1.amazonaws.com/White+on+Transparent.png"/>                
            </div>
        </div>
    )
}