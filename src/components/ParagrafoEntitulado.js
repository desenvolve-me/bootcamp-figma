import React from 'react'
import '../estilos/estilo.css'

//props é sempre um dicionário
export default function ParagrafoEntitulado(props)
{
    // console.log(props)
    // console.log("o titulo e: "+props.titulo)

    
    return (
        <div>

            <h3>{props.titulo}</h3> 
            <p>
                {formataTexto(props.paragrafo)}
            </p>

        </div>
    )
}

function formataTexto(texto){
    var textoEmHtml = texto.replace("ProgramaAção",'<span style="color:#0A0057;font-weight: bold;">ProgramaAção</span>')
    return <div dangerouslySetInnerHTML={{
        __html: textoEmHtml
    }}>
    </div>;
}