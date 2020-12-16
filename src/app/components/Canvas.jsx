import React, { Component, useRef, useEffect, useState } from 'react'
// import io from 'socket.io/client-dist/socket.io'
const endpoint = "http://127.0.0.1:3000"

const Canvas = props => {

    const [state, setCanvasState] = useState({canv: "no-active", board: "active"})

    const canvasRef = useRef(null)
    let canvasWidth = "800" 
    let canvasHeight = "600"

    function initializeCanvas(){
        const canv = canvasRef.current
        const ctx = canv.getContext('2d')

        let dibujando = false

        let coordenadas = {
            x: 0,
            y: 0
        }
        ctx.lineWidth = 1

        function obtenerPosicion(e){ 
            coordenadas.x = (e.clientX - canv.offsetLeft) - 95 
            coordenadas.y = (e.clientY - canv.offsetTop) - 95 //me da paja hacer los calculos, esto funciona
        } 

        canv.addEventListener('mousedown', event => {
            dibujando = true
            obtenerPosicion(event)
        })

        canv.addEventListener('mouseup', () => {
            dibujando = false
        })

        canv.addEventListener('mousemove', event => {
            if (!dibujando) return

            ctx.beginPath()
            ctx.lineCap = 'round'

            ctx.strokeStyle = '#000000'

            ctx.moveTo(coordenadas.x, coordenadas.y)

            obtenerPosicion(event)

            ctx.lineTo(coordenadas.x , coordenadas.y)

            ctx.stroke()
        })
    }
    
    useEffect(() => {

        // const socket = io(endpoint)

        // socket.on('connect', () => {
        //     socket.on('hi', () => console.log('asd'))
        // })

        initializeCanvas()

        
    }, [])
    
    return (
        <div>
            <div onClick={() => setCanvasState({canv:'active', board:'no-active'})} className={`${state.board} board`}>

            </div>
            <canvas id="canvas-1" className={state.canv} width={canvasWidth} height={canvasHeight} ref={canvasRef} {...props} >
                Tu navegador no es compatible
            </canvas>
            <button onClick={() => setCanvasState({canv:"no-active", board: "active"})} type="button" className={`${state.canv} btn-close btn btn-outline-danger`}>Close</button>
        </div>
    )

}

export default Canvas
