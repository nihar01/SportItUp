import React, { Component } from 'react'

export default class DoBooking extends Component {
    
    constructor(props){
        super(props)

    }
    
    render() {
        console.log(this.props)
        console.log(this.params)
        return (
            
            <div>
                <h1>here we will do booking</h1>            
            </div>
        )
    }
}
