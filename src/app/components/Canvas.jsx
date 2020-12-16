import React, { Component, useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)
    
    useEffect(() => {
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
    }, [])
    
    return (
        <div>
            <canvas id="canvas-1" width="500" height="400" ref={canvasRef} {...props} >
                Tu navegador no es compatible
            </canvas>
            <button type="button" className={` btn-close btn btn-outline-danger`}>Close</button>
        </div>
    )

}

export default Canvas

