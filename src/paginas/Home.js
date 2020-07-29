

import React from 'react'
import HomeSection from '../components/HomeSection'
import Carrossel from '../components/Carrossel'
import Rodape from '../components/Rodape'
export default function Home() {

    return (
        <div className = "container_root container_home">
            
            <HomeSection />
            <Carrossel/>
            
            <section id='section_home'>
                <div className='div_imagem'>
                    <img id='imghomefinal' src="https://desenvolve-me-bootcamp-recursos.s3-sa-east-1.amazonaws.com/Original.png"/>
                </div>
                <div className='div_lista'>
                        <h3>Alguns exemplos de missões</h3>
                    <ul>
                        <li>Apresentar um tema em sala de aula</li>
                        <li>Contribuir com um projeto open source</li>
                        <li>Ajudar uma ong no desenvolvimento ou manutenção de um site ou aplicativo</li>
                        <li>Participar de um meetup sobre desenvolvimento de software e escrever um artigo sobre o evento em nosso blog</li>
                    </ul>
                </div>
            </section>
            
            <Rodape/>

            
        </div>
    )

}