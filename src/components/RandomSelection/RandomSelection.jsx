import { useState, useEffect } from 'react'
import './RandomSelection.css'
import qmark from '../../assets/images/marioqmark.png'

const RandomSelection = ({fighters}) => {
    const [randomFighter, setRandomFighter] = useState(0)

    const GetRandomFighter = () => {
        let selectedRandomFighter = fighters[Math.floor(Math.random() * fighters.length)]
        console.log(selectedRandomFighter)
        setRandomFighter(selectedRandomFighter)
    }

    const RemoveFighter = ({fighters}) => {
        console.log({fighters})
        console.log(randomFighter.name)
        // Delete from list now...
        let fighterName = randomFighter.name
        const filteredList = {fighters}.filter(function (fighterNameList) {
            return fighterNameList !== fighterName;
        })
        console.log({fighters})
    }
    
  return (
    <div className='random-selection-container'>
        <div className="random-btn-container">
            <button className='random-btn' onClick={GetRandomFighter}>
                <img src={qmark} alt="" className='qmark'/>
            </button>
        </div>
        <div className="player-container">
            <h2 className="player-title">Player One</h2>
            <div className="player-fighter-container">
                <h2 className='player-fighter-name'>{randomFighter.name}</h2>
                <img src={randomFighter.icon} alt="" className='player-fighter-icon'/>
            </div>
        </div>
        <button onClick={() => RemoveFighter({fighters})}>Continue</button>
    </div>
  )
}

export default RandomSelection