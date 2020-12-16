import React, { Component, useState } from 'react'
import '../styles/main.scss'
import Canvas from './Canvas'

// function boardClick(){
//     pizarra.classList.remove('col-6')
//     pizarra.classList.add('open')

//     hideBlock(board)

//     displayBlock(canv)
    
//     initializeCanvas()
// }

// // canv.addEventListener('resize', () => {
// //     ctx.canvas.width = window.innerWidth
// //     ctx.canvas.height = window.innerHeight
// // })

// closeBtn.addEventListener('click', () => {
//     hideBlock(canv)

//     closeBtn.classList.add('d-none')

//     displayBlock(board)
// }, false)

// function initializeCanvas(){
//     let dibujando = false
//     let ctx = canv.getContext('2d')

//     let coordenadas = {
//         x: 0,
//         y: 0
//     }
//     ctx.lineWidth = 1

//     function obtenerPosicion(event){ 
//         coordenadas.x = event.clientX - canv.offsetLeft
//         coordenadas.y = event.clientY - canv.offsetTop
//     } 

//     canv.addEventListener('mousedown', (event) => {
//         dibujando = true
//         obtenerPosicion(event)
//     })

//     canv.addEventListener('mouseup', () => {
//         dibujando = false
//     })

//     canv.addEventListener('mousemove', (event) => {
//         if (!dibujando) return

//         ctx.beginPath()
//         ctx.lineCap = 'round'

//         ctx.strokeStyle = '#000000'

//         ctx.moveTo(coordenadas.x, coordenadas.y)

//         obtenerPosicion(event)

//         ctx.lineTo(coordenadas.x , coordenadas.y)

//         ctx.stroke()

//     })

// }

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
                    </div>
                </div>
            </div>
        )
    }
}

export default Home