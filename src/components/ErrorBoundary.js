import React, { Component} from 'react'

class ErrorBoundary extends Component {
    constructor(props){
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.hasError){
            return <h1>Ops, that's not good</h1>
        } else {
            return this.props.children
        }
    }
    
}

export default ErrorBoundary