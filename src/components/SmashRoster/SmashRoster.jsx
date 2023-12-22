import { useState } from 'react'
import './SmashRoster.css'
import CSSIcon from '../CSSIcon/CSSIcon'
import qmark from '../../assets/images/marioqmark.png'
    
const SmashRoster = () => {
    //  Fighter List
    const [fighters, setFighters] = useState(
        [
            {id:1, name:'Mario',icon:'https://www.ssbwiki.com/images/0/0d/MarioHeadSSBU.png'},
            {id:2,name:'DonkeyKong',icon:'https://www.ssbwiki.com/images/b/ba/DonkeyKongHeadSSBU.png'},
            {id:3,name:'Link',icon:'https://www.ssbwiki.com/images/a/aa/LinkHeadSSBU.png'},
            {id:4,name:'Samus',icon:'https://www.ssbwiki.com/images/7/7f/SamusHeadSSBU.png'},
            {id:5,name:'DarkSamus',icon:'https://www.ssbwiki.com/images/9/96/DarkSamusHeadSSBU.png'},
            {id:6,name:'Yoshi',icon:'https://www.ssbwiki.com/images/0/03/YoshiHeadSSBU.png'},
            {id:7,name:'Kirby',icon:'https://www.ssbwiki.com/images/9/91/KirbyHeadSSBU.png'},
            {id:8,name:'Fox',icon:'https://www.ssbwiki.com/images/0/04/FoxHeadSSBU.png'},
            {id:9,name:'Pikachu',icon:'https://www.ssbwiki.com/images/f/fa/PikachuHeadSSBU.png'},
            {id:10,name:'Luigi',icon:'https://www.ssbwiki.com/images/c/c6/LuigiHeadSSBU.png'},
            {id:11,name:'Ness',icon:'https://www.ssbwiki.com/images/0/0f/NessHeadSSBU.png'},
            {id:12,name:'CaptainFalcon',icon:'https://www.ssbwiki.com/images/3/35/CaptainFalconHeadSSBU.png'},
            {id:13,name:'Jigglypuff',icon:'https://www.ssbwiki.com/images/9/95/JigglypuffHeadSSBU.png'},
            {id:14,name:'Peach',icon:'https://www.ssbwiki.com/images/d/d2/PeachHeadSSBU.png'},
            {id:15,name:'Daisy',icon:'https://www.ssbwiki.com/images/9/96/DaisyHeadSSBU.png'},
            {id:16,name:'Bowser',icon:'https://www.ssbwiki.com/images/b/b5/BowserHeadSSBU.png'},
            {id:17,name:'IceClimbers',icon:'https://www.ssbwiki.com/images/8/8b/IceClimbersHeadSSBU.png'},
            {id:18,name:'Sheik',icon:'https://www.ssbwiki.com/images/3/37/SheikHeadSSBU.png'},
            {id:19,name:'Zelda',icon:'https://www.ssbwiki.com/images/c/c1/ZeldaHeadSSBU.png'},
            {id:20,name:'DrMario',icon:'https://www.ssbwiki.com/images/7/78/DrMarioHeadSSBU.png'},
            {id:21,name:'Pichu',icon:'https://www.ssbwiki.com/images/d/d6/PichuHeadSSBU.png'},
            {id:22,name:'Falco',icon:'https://www.ssbwiki.com/images/2/2f/FalcoHeadSSBU.png'},
            {id:23,name:'Marth',icon:'https://www.ssbwiki.com/images/b/bd/MarthHeadSSBU.png'},
            {id:24,name:'Lucina',icon:'https://www.ssbwiki.com/images/0/04/LucinaHeadSSBU.png'},
            {id:25,name:'YoungLink',icon:'https://www.ssbwiki.com/images/c/cd/YoungLinkHeadSSBU.png'},
            {id:26,name:'Ganondorf',icon:'https://www.ssbwiki.com/images/7/78/GanondorfHeadSSBU.png'},
            {id:27,name:'Mewtwo',icon:'https://www.ssbwiki.com/images/9/96/MewtwoHeadSSBU.png'},
            {id:28,name:'Roy',icon:'https://www.ssbwiki.com/images/e/ed/RoyHeadSSBU.png'},
            {id:29,name:'Chrom',icon:'https://www.ssbwiki.com/images/2/25/ChromHeadSSBU.png'},
            {id:30,name:'MrGame&W',icon:'https://www.ssbwiki.com/images/6/6b/MrGame%26WatchHeadSSBU.png'},
            {id:31,name:'MetaKnight',icon:'https://www.ssbwiki.com/images/d/de/MetaKnightHeadSSBU.png'},
            {id:32,name:'Pit',icon:'https://www.ssbwiki.com/images/a/aa/PitHeadSSBU.png'},
            {id:33,name:'DarkPit',icon:'https://www.ssbwiki.com/images/e/ed/DarkPitHeadSSBU.png'},
            {id:34,name:'ZeroSuitSamus',icon:'https://www.ssbwiki.com/images/7/71/ZeroSuitSamusHeadSSBU.png'},
            {id:35,name:'Wario',icon:'https://www.ssbwiki.com/images/0/05/WarioHeadSSBU.png'},
            {id:36,name:'Snake',icon:'https://www.ssbwiki.com/images/9/9a/SnakeHeadSSBU.png'},
            {id:37,name:'Ike',icon:'https://www.ssbwiki.com/images/b/b2/IkeHeadSSBU.png'},
            {id:38,name:'PkmTrainer',icon:'https://www.ssbwiki.com/images/0/09/Pok%C3%A9monTrainerHeadSSBU.png'},
            {id:39,name:'DiddyKong',icon:'https://www.ssbwiki.com/images/3/36/DiddyKongHeadSSBU.png'},
            {id:40,name:'Lucas',icon:'https://www.ssbwiki.com/images/f/ff/LucasHeadSSBU.png'},
            {id:41,name:'Sonic',icon:'https://www.ssbwiki.com/images/7/76/SonicHeadSSBU.png'},
            {id:42,name:'KingDDD',icon:'https://www.ssbwiki.com/images/b/bb/KingDededeHeadSSBU.png'},
            {id:43,name:'Olimar',icon:'https://www.ssbwiki.com/images/9/91/OlimarHeadSSBU.png'},
            {id:44,name:'Lucario',icon:'https://www.ssbwiki.com/images/c/cd/LucarioHeadSSBU.png'},
            {id:45,name:'R.O.B.',icon:'https://www.ssbwiki.com/images/b/b3/ROBHeadSSBU.png'},
            {id:46,name:'ToonLink',icon:'https://www.ssbwiki.com/images/e/e6/ToonLinkHeadSSBU.png'},
            {id:47,name:'Wolf',icon:'https://www.ssbwiki.com/images/e/e8/WolfHeadSSBU.png'},
            {id:48,name:'Villager',icon:'https://www.ssbwiki.com/images/b/b9/VillagerHeadSSBU.png'},
            {id:49,name:'MegaMan',icon:'https://www.ssbwiki.com/images/5/55/MegaManHeadSSBU.png'},
            {id:50,name:'WiiFit',icon:'https://www.ssbwiki.com/images/8/87/WiiFitTrainerHeadSSBU.png'},
            {id:51,name:'Rosalina',icon:'https://www.ssbwiki.com/images/e/e8/RosalinaHeadSSBU.png'},
            {id:52,name:'LilMac',icon:'https://www.ssbwiki.com/images/1/10/LittleMacHeadSSBU.png'},
            {id:53,name:'Greninja',icon:'https://www.ssbwiki.com/images/6/65/GreninjaHeadSSBU.png'},
            {id:54,name:'Palutena',icon:'https://www.ssbwiki.com/images/a/a9/PalutenaHeadSSBU.png'},
            {id:55,name:'Pac-Man',icon:'https://www.ssbwiki.com/images/4/45/Pac-ManHeadSSBU.png'},
            {id:56,name:'Robin',icon:'https://www.ssbwiki.com/images/2/25/RobinHeadSSBU.png'},
            {id:57,name:'Shulk',icon:'https://www.ssbwiki.com/images/c/c1/ShulkHeadSSBU.png'},
            {id:58,name:'BowserJr',icon:'https://www.ssbwiki.com/images/0/07/BowserJrHeadSSBU.png'},
            {id:59,name:'DuckHunt',icon:'https://www.ssbwiki.com/images/a/a1/DuckHuntHeadSSBU.png'},
            {id:60,name:'Ryu',icon:'https://www.ssbwiki.com/images/f/fb/RyuHeadSSBU.png'},
            {id:61,name:'Ken',icon:'https://www.ssbwiki.com/images/7/72/KenHeadSSBU.png'},
            {id:62,name:'Cloud',icon:'https://www.ssbwiki.com/images/3/3b/CloudHeadSSBU.png'},
            {id:63,name:'Corrin',icon:'https://www.ssbwiki.com/images/c/cf/CorrinHeadSSBU.png'},
            {id:64,name:'Bayonetta',icon:'https://www.ssbwiki.com/images/6/6c/BayonettaHeadSSBU.png'},
            {id:65,name:'Inkling',icon:'https://www.ssbwiki.com/images/f/f1/InklingHeadSSBU.png'},
            {id:66,name:'Ridley',icon:'https://www.ssbwiki.com/images/5/5b/RidleyHeadSSBU.png'},
            {id:67,name:'Simon',icon:'https://www.ssbwiki.com/images/d/df/SimonHeadSSBU.png'},
            {id:68,name:'Richter',icon:'https://www.ssbwiki.com/images/0/07/RichterHeadSSBU.png'},
            {id:69,name:'KingKRool',icon:'https://www.ssbwiki.com/images/d/de/KingKRoolHeadSSBU.png'},
            {id:70,name:'Isabelle',icon:'https://www.ssbwiki.com/images/2/2f/IsabelleHeadSSBU.png'},
            {id:71,name:'Incineroar',icon:'https://www.ssbwiki.com/images/5/50/IncineroarHeadSSBU.png'},
            {id:72,name:'MiiBrawler',icon:'https://www.ssbwiki.com/images/d/d8/MiiBrawlerHeadSSBU.png'},
            {id:73,name:'MiiSword',icon:'https://www.ssbwiki.com/images/e/ef/MiiSwordfighterHeadSSBU.png'},
            {id:74,name:'MiiGunner',icon:'https://www.ssbwiki.com/images/3/3d/MiiGunnerHeadSSBU.png'},
            {id:75,name:'PirahnaPlant',icon:'https://www.ssbwiki.com/images/3/38/PiranhaPlantHeadSSBU.png'},
            {id:76,name:'Joker',icon:'https://www.ssbwiki.com/images/2/25/JokerHeadSSBU.png'},
            {id:77,name:'Hero',icon:'https://www.ssbwiki.com/images/3/3d/HeroHeadSSBU.png'},
            {id:78,name:'Banjo&K',icon:'https://www.ssbwiki.com/images/6/60/Banjo%26KazooieHeadSSBU.png'},
            {id:79,name:'Terry',icon:'https://www.ssbwiki.com/images/f/f9/TerryHeadSSBU.png'},
            {id:80,name:'Byleth',icon:'https://www.ssbwiki.com/images/a/a2/BylethHeadSSBU.png'},
            {id:81,name:'MinMin',icon:'https://www.ssbwiki.com/images/d/de/MinMinHeadSSBU.png'},
            {id:82,name:'Steve',icon:'https://www.ssbwiki.com/images/1/11/SteveHeadSSBU.png'},
            {id:83,name:'Sephiroth',icon:'https://www.ssbwiki.com/images/5/5e/SephirothHeadSSBU.png'},
            {id:84,name:'Aegis',icon:'https://www.ssbwiki.com/images/f/fc/PyraMythraHeadSSBU.png'},
            {id:85,name:'Kazuya',icon:'https://www.ssbwiki.com/images/6/67/KazuyaHeadSSBU.png'},
            {id:86,name:'Sora',icon:'https://www.ssbwiki.com/images/0/0e/SoraHeadSSBU.png'}
        ]
    )
    const [randomFighter, setRandomFighter] = useState(0)

    const GetRandomFighter = () => {
        let selectedRandomFighter = fighters[Math.floor(Math.random() * fighters.length)]
        console.log(selectedRandomFighter)
        setRandomFighter(selectedRandomFighter)
    }

    const RemoveFighter = () => {
        console.log(randomFighter.name)
        // Delete from list now...
        // let listIndex = randomFighter.id-1
        // console.log(randomFighter.id)
        // console.log(listIndex)
        // let tmpList = fighters;
        // tmpList = fighters.splice(listIndex, 1)
        // setFighters(tmpList)
        // console.log(fighters)
    }

  return (
    <>
        {/* Random Selector */}
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
            <button onClick={() => RemoveFighter(fighters)}>Continue</button>
        </div>
        {/* CSS */}
        <h2 className="currentroster-title">Current Roster</h2>
        <div className='smashroster-container'>
            {fighters.map((fighter) => {
                console.log('made a box')
                return (
                    <CSSIcon
                        key = {fighter.id}
                        name = {fighter.name}
                        icon = {fighter.icon}
                    />
                    
                )
            })}
        </div>
    </>
  )
}

export default SmashRoster