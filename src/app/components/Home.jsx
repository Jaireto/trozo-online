import React, { Component, useState } from 'react'
import '../styles/main.scss'
import Canvas from './Canvas'

class Home extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="pizarra col-6">
                        <Canvas />
                        {/* <Canvas />
                        <Canvas /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home