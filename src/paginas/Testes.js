import React from 'react'

export default class Testes extends React.Component {

    state = {
        Ligado:false, //true

    }


render(){    
    console.log("entrou na função render")
    return (
        <div>
            <p> 
                {                 
                    //if (this.state.Ligado){
                    //Oparador ternário
                    this.state.Ligado ? 'Ligado' : 'Desligado'                    
                }
            </p>
            <form>
                <input type="button" value={
                      this.state.Ligado ? 'Desliga' : 'Liga' 
                }
                onClick={
                    
                    () => {
                        //var estaligado

                        // this.state.Ligado ? this.setState({Ligado:false  }) : this.setState({Ligado:true  })
                        //!true -> true
                        //!false -> true
                        this.setState({ Ligado: !this.state.Ligado })


                        //this.setSate({Ligado: true})
                        console.log("clicou no botão")
                    }
                }
                />
            </form>
        </div>
    )
}
}