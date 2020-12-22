import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Canvas from './components/Canvas'
import { io } from 'socket.io-client'
const endpoint = "http://127.0.0.1:8080"
 
// const App = () => {
//     return (
//         <div className="row jumbotron">
//             <Router>
//                 <Route path="/" exact component={Canvas} />
//             </Router>
//         </div>
//     )
// }

const App = () => {

    useEffect(() => {
        const socket = io(endpoint)
    
        socket.on('hi', () => console.log('asdasdasd'))
        
    }, [])

    return (
        <div className="row jumbotron">
            <Canvas />
        </div>
    )
}

export default App