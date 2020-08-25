import React from 'react'

export default class Login extends React.Component {

    state = {
        email: undefined,
        password: undefined
    }

    render(){
        console.log("estado do componente: "+JSON.stringify(this.state))
        
        return(
            <div>
                <p> Login </p>

                <form>
                    <label> E-mail: </label>
                        <input type="email" onChange={ 
                            (event) => { 
                                //console.log("novo texto digitado: "+event.target.value)                         
                               this.setState({email: event.target.value})
                            }
                        }/>        
                    <label> Senha:</label>
                        <input type="password" />
                        <input type="button" value="Entrar" onClick={ 
                            (event) => {
                                if(this.state.email.endsWith("@kiabws.online")){
                                    alert("essse dominio de email não é aceito pela nossa politica")
                                }else{
                                    console.log("envia o form")
                                }
                            }
                        }/>
                </form>

            </div>

        )
    }

}