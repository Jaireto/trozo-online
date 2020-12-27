import React, { useRef, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const Canvas = props => {

    const [state, setCanvasState] = useState({canv: "no-active", board: "active"})

    const canvasRef = useRef(null)

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
            let rect = canv.getBoundingClientRect()
            coordenadas.x = (e.clientX - rect.left)
            coordenadas.y = (e.clientY - rect.top)
            return coordenadas
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
        const socket = io()

        socket.on('connect', () => console.log('conected'))
        socket.on('new user', () => console.log(socket.id))

        initializeCanvas()
    }, [])
    
    return (
        <div className="row jumbotron">
            <div className="col-6">
                <div onClick={() => setCanvasState({canv:'active', board:'no-active'})} className={`${state.board} board`}>
        
                </div>
                <canvas id="canvas-1" className={state.canv} width='800' height='600' ref={canvasRef} {...props}>
                    Tu navegador no es compatible
                </canvas>
                <button onClick={() => setCanvasState({canv:"no-active", board: "active"})} type="button" className={`${state.canv} btn-close btn btn-outline-danger`}>Close</button>
            </div> 
        </div>
    )

}

export default Canvas
