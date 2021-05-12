// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        const message = this.state.secondsLeft !== 0 ? <h1>{this.state.secondsLeft} seconds left before I go boom!</h1> : <h1>Boom!</h1>
        return(
            <div>{message}</div>
        )
        
    }
}

export default Bomb;