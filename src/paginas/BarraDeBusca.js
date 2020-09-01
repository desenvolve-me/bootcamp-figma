import React from 'react'

export default class BarraDeBusca extends React.Component {

    state = {
        texto:undefined
    }
    render(){
        return(
            <div>
                <form>
                    <input type='text' onChange={
                        (event) => { 
                            this.setState({texto: event.target.value})
                            console.log("O texto mudou: "+event.target.value)
                        }
                    } />
                </form>
                   { 
                       this.state.texto && this.state.texto.length > 0 
                       ?
                       <p>aqui estão as sugestões</p> 
                       :
                       null
                   }                    
            </div>
        )
    }
}