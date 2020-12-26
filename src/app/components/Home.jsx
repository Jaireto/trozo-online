import React, { useRef, useEffect } from 'react'

const Home = () => {
    const roomHolderRef = useRef(null)
    const nameHolderRef = useRef(null)

    const createNickName = () => {
        const roomHolder = roomHolderRef.current
        const nameHolder = nameHolderRef.current
        roomHolder.classList.add('room-active')
        nameHolder.classList.remove('nick-active')
    }

    // useEffect(() => {

    // }, [])

    return (
        <div className="jumbotron home-container">

            <form className="form-container">
                <div className="name_input_holder nick-active" ref={nameHolderRef}>
                    <input required id="name_input" type="text" maxLength="12" placeholder="Choose your nickname"/>
                    <a href="#" className="create-btn btn btn-primary" onClick={createNickName}>Create</a>
                </div>

                <div className="room_input_holder" ref={roomHolderRef}> 
                    <input required type="text" placeholder="Room name"/>
                    <a href="#">Create a room</a>

                    <input required type="text" placeholder="Room name"/>
                    <a href="#">Join room</a>
                </div>
            </form>
            

        </div>
    )
}

export default Home
