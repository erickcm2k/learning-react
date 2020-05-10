import React, {Component} from 'react'

class Stateful extends Component { // Eventos y estados de la app.
    constructor(props) { // Propiedades
        super(props) 
        this.state = {
            hello: 'Hola, mundo'
        }
    }
    render() {// retorna el código HTML
        return(
            <h1>{this.state.hello}</h1>             //<h1>Hello World!</h1>
        )
    }
}

export default Stateful 