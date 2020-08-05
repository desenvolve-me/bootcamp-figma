import React from 'react'
                                 //é um
export default class Calculadora extends React.Component {

    state = {
        //chave : valor
        primeiroNumero  : 0,
        segundoNumero  : 0,
        resultado: 0,
    }

    render(){
        console.log('passou aqui')
        return (
            <div>
                <form>
                    <label>Primeiro Numero:</label>
                                                   
                    <input type="number" value={this.state.primeiroNumero} onChange={ 
                        (event) => {
                            this.setState({ 
                                primeiroNumero: event.target.value,
                                resultado: this.state.primeiroNumero + this.state.segundoNumero
                            })
                       }
                    }></input>
                    
                    
                    <label>Segundo Numero:</label>
                                                   
                    <input type="number" value={this.state.segundoNumero} onChange={ 
                        (event) => {
                            this.setState({ 
                                segundoNumero: event.target.value ,
                                resultado: this.state.primeiroNumero + this.state.segundoNumero
                            })
                       }
                    }></input>                                        
                    
                    
                    <input type="button" value="Soma" onClick={
                        function soma(){
                           
                        }
                    }></input>
                    <label>{this.state.resultado}</label>
                </form>
            </div>
        )
    }

}