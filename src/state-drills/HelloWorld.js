import React from 'react';

class HelloWorld extends React.Component{
state = {
    who: 'World'  
}

    render () {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={() => this.setState({who: 'world'})} >World</button>
                <button onClick={() => this.setState({who: 'friend'})}>Friend</button>
                <button onClick={() => this.setState({who: 'react'})}>React</button>
            </div>
        )
    }
}

export default HelloWorld