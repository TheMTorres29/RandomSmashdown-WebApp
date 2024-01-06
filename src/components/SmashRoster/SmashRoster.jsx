import { useState } from 'react'
import './SmashRoster.css'
import CSSIcon from '../CSSIcon/CSSIcon'
import qmark from '../../assets/images/marioqmark.png'
import miiLogo from '../../assets/images/miilogo.png'
    
const SmashRoster = () => {
    //  Fighter List
    const [fighters, setFighters] = useState(
        [
            {id:1, name:'Mario',icon:'https://www.ssbwiki.com/images/0/0d/MarioHeadSSBU.png'},
            {id:2,name:'Donkey Kong',icon:'https://www.ssbwiki.com/images/b/ba/DonkeyKongHeadSSBU.png'},
            {id:3,name:'Link',icon:'https://www.ssbwiki.com/images/a/aa/LinkHeadSSBU.png'},
            {id:4,name:'Samus',icon:'https://www.ssbwiki.com/images/7/7f/SamusHeadSSBU.png'},
            {id:5,name:'Dark Samus',icon:'https://www.ssbwiki.com/images/9/96/DarkSamusHeadSSBU.png'},
            {id:6,name:'Yoshi',icon:'https://www.ssbwiki.com/images/0/03/YoshiHeadSSBU.png'},
            {id:7,name:'Kirby',icon:'https://www.ssbwiki.com/images/9/91/KirbyHeadSSBU.png'},
            {id:8,name:'Fox',icon:'https://www.ssbwiki.com/images/0/04/FoxHeadSSBU.png'},
            {id:9,name:'Pikachu',icon:'https://www.ssbwiki.com/images/f/fa/PikachuHeadSSBU.png'},
            {id:10,name:'Luigi',icon:'https://www.ssbwiki.com/images/c/c6/LuigiHeadSSBU.png'},
            {id:11,name:'Ness',icon:'https://www.ssbwiki.com/images/0/0f/NessHeadSSBU.png'},
            {id:12,name:'Captain Falcon',icon:'https://www.ssbwiki.com/images/3/35/CaptainFalconHeadSSBU.png'},
            {id:13,name:'Jigglypuff',icon:'https://www.ssbwiki.com/images/9/95/JigglypuffHeadSSBU.png'},
            {id:14,name:'Peach',icon:'https://www.ssbwiki.com/images/d/d2/PeachHeadSSBU.png'},
            {id:15,name:'Daisy',icon:'https://www.ssbwiki.com/images/9/96/DaisyHeadSSBU.png'},
            {id:16,name:'Bowser',icon:'https://www.ssbwiki.com/images/b/b5/BowserHeadSSBU.png'},
            {id:17,name:'Ice Climbers',icon:'https://www.ssbwiki.com/images/8/8b/IceClimbersHeadSSBU.png'},
            {id:18,name:'Sheik',icon:'https://www.ssbwiki.com/images/3/37/SheikHeadSSBU.png'},
            {id:19,name:'Zelda',icon:'https://www.ssbwiki.com/images/c/c1/ZeldaHeadSSBU.png'},
            {id:20,name:'Dr. Mario',icon:'https://www.ssbwiki.com/images/7/78/DrMarioHeadSSBU.png'},
            {id:21,name:'Pichu',icon:'https://www.ssbwiki.com/images/d/d6/PichuHeadSSBU.png'},
            {id:22,name:'Falco',icon:'https://www.ssbwiki.com/images/2/2f/FalcoHeadSSBU.png'},
            {id:23,name:'Marth',icon:'https://www.ssbwiki.com/images/b/bd/MarthHeadSSBU.png'},
            {id:24,name:'Lucina',icon:'https://www.ssbwiki.com/images/0/04/LucinaHeadSSBU.png'},
            {id:25,name:'Young Link',icon:'https://www.ssbwiki.com/images/c/cd/YoungLinkHeadSSBU.png'},
            {id:26,name:'Ganondorf',icon:'https://www.ssbwiki.com/images/7/78/GanondorfHeadSSBU.png'},
            {id:27,name:'Mewtwo',icon:'https://www.ssbwiki.com/images/9/96/MewtwoHeadSSBU.png'},
            {id:28,name:'Roy',icon:'https://www.ssbwiki.com/images/e/ed/RoyHeadSSBU.png'},
            {id:29,name:'Chrom',icon:'https://www.ssbwiki.com/images/2/25/ChromHeadSSBU.png'},
            {id:30,name:'Mr. Game & Watch',icon:'https://www.ssbwiki.com/images/6/6b/MrGame%26WatchHeadSSBU.png'},
            {id:31,name:'Meta Knight',icon:'https://www.ssbwiki.com/images/d/de/MetaKnightHeadSSBU.png'},
            {id:32,name:'Pit',icon:'https://www.ssbwiki.com/images/a/aa/PitHeadSSBU.png'},
            {id:33,name:'Dark Pit',icon:'https://www.ssbwiki.com/images/e/ed/DarkPitHeadSSBU.png'},
            {id:34,name:'Zero Suit Samus',icon:'https://www.ssbwiki.com/images/7/71/ZeroSuitSamusHeadSSBU.png'},
            {id:35,name:'Wario',icon:'https://www.ssbwiki.com/images/0/05/WarioHeadSSBU.png'},
            {id:36,name:'Snake',icon:'https://www.ssbwiki.com/images/9/9a/SnakeHeadSSBU.png'},
            {id:37,name:'Ike',icon:'https://www.ssbwiki.com/images/b/b2/IkeHeadSSBU.png'},
            {id:38,name:'Pokemon Trainer',icon:'https://www.ssbwiki.com/images/0/09/Pok%C3%A9monTrainerHeadSSBU.png'},
            {id:39,name:'Diddy Kong',icon:'https://www.ssbwiki.com/images/3/36/DiddyKongHeadSSBU.png'},
            {id:40,name:'Lucas',icon:'https://www.ssbwiki.com/images/f/ff/LucasHeadSSBU.png'},
            {id:41,name:'Sonic',icon:'https://www.ssbwiki.com/images/7/76/SonicHeadSSBU.png'},
            {id:42,name:'King DeDeDe',icon:'https://www.ssbwiki.com/images/b/bb/KingDededeHeadSSBU.png'},
            {id:43,name:'Olimar',icon:'https://www.ssbwiki.com/images/9/91/OlimarHeadSSBU.png'},
            {id:44,name:'Lucario',icon:'https://www.ssbwiki.com/images/c/cd/LucarioHeadSSBU.png'},
            {id:45,name:'R.O.B.',icon:'https://www.ssbwiki.com/images/b/b3/ROBHeadSSBU.png'},
            {id:46,name:'Toon Link',icon:'https://www.ssbwiki.com/images/e/e6/ToonLinkHeadSSBU.png'},
            {id:47,name:'Wolf',icon:'https://www.ssbwiki.com/images/e/e8/WolfHeadSSBU.png'},
            {id:48,name:'Villager',icon:'https://www.ssbwiki.com/images/b/b9/VillagerHeadSSBU.png'},
            {id:49,name:'Mega Man',icon:'https://www.ssbwiki.com/images/5/55/MegaManHeadSSBU.png'},
            {id:50,name:'Wii Fit Trainer',icon:'https://www.ssbwiki.com/images/8/87/WiiFitTrainerHeadSSBU.png'},
            {id:51,name:'Rosalina & Luma',icon:'https://www.ssbwiki.com/images/e/e8/RosalinaHeadSSBU.png'},
            {id:52,name:'Little Mac',icon:'https://www.ssbwiki.com/images/1/10/LittleMacHeadSSBU.png'},
            {id:53,name:'Greninja',icon:'https://www.ssbwiki.com/images/6/65/GreninjaHeadSSBU.png'},
            {id:54,name:'Palutena',icon:'https://www.ssbwiki.com/images/a/a9/PalutenaHeadSSBU.png'},
            {id:55,name:'Pac-Man',icon:'https://www.ssbwiki.com/images/4/45/Pac-ManHeadSSBU.png'},
            {id:56,name:'Robin',icon:'https://www.ssbwiki.com/images/2/25/RobinHeadSSBU.png'},
            {id:57,name:'Shulk',icon:'https://www.ssbwiki.com/images/c/c1/ShulkHeadSSBU.png'},
            {id:58,name:'Bowser Jr.',icon:'https://www.ssbwiki.com/images/0/07/BowserJrHeadSSBU.png'},
            {id:59,name:'Duck Hunt',icon:'https://www.ssbwiki.com/images/a/a1/DuckHuntHeadSSBU.png'},
            {id:60,name:'Ryu',icon:'https://www.ssbwiki.com/images/f/fb/RyuHeadSSBU.png'},
            {id:61,name:'Ken',icon:'https://www.ssbwiki.com/images/7/72/KenHeadSSBU.png'},
            {id:62,name:'Cloud',icon:'https://www.ssbwiki.com/images/3/3b/CloudHeadSSBU.png'},
            {id:63,name:'Corrin',icon:'https://www.ssbwiki.com/images/c/cf/CorrinHeadSSBU.png'},
            {id:64,name:'Bayonetta',icon:'https://www.ssbwiki.com/images/6/6c/BayonettaHeadSSBU.png'},
            {id:65,name:'Inkling',icon:'https://www.ssbwiki.com/images/f/f1/InklingHeadSSBU.png'},
            {id:66,name:'Ridley',icon:'https://www.ssbwiki.com/images/5/5b/RidleyHeadSSBU.png'},
            {id:67,name:'Simon',icon:'https://www.ssbwiki.com/images/d/df/SimonHeadSSBU.png'},
            {id:68,name:'Richter',icon:'https://www.ssbwiki.com/images/0/07/RichterHeadSSBU.png'},
            {id:69,name:'King K. Rool',icon:'https://www.ssbwiki.com/images/d/de/KingKRoolHeadSSBU.png'},
            {id:70,name:'Isabelle',icon:'https://www.ssbwiki.com/images/2/2f/IsabelleHeadSSBU.png'},
            {id:71,name:'Incineroar',icon:'https://www.ssbwiki.com/images/5/50/IncineroarHeadSSBU.png'},
            {id:72,name:'Mii Brawler',icon:'https://www.ssbwiki.com/images/d/d8/MiiBrawlerHeadSSBU.png'},
            {id:73,name:'Mii Swordfighter',icon:'https://www.ssbwiki.com/images/e/ef/MiiSwordfighterHeadSSBU.png'},
            {id:74,name:'Mii Gunner',icon:'https://www.ssbwiki.com/images/3/3d/MiiGunnerHeadSSBU.png'},
            {id:75,name:'Piranha Plant',icon:'https://www.ssbwiki.com/images/3/38/PiranhaPlantHeadSSBU.png'},
            {id:76,name:'Joker',icon:'https://www.ssbwiki.com/images/2/25/JokerHeadSSBU.png'},
            {id:77,name:'Hero',icon:'https://www.ssbwiki.com/images/3/3d/HeroHeadSSBU.png'},
            {id:78,name:'Banjo & Kazooie',icon:'https://www.ssbwiki.com/images/6/60/Banjo%26KazooieHeadSSBU.png'},
            {id:79,name:'Terry',icon:'https://www.ssbwiki.com/images/f/f9/TerryHeadSSBU.png'},
            {id:80,name:'Byleth',icon:'https://www.ssbwiki.com/images/a/a2/BylethHeadSSBU.png'},
            {id:81,name:'Min Min',icon:'https://www.ssbwiki.com/images/d/de/MinMinHeadSSBU.png'},
            {id:82,name:'Steve',icon:'https://www.ssbwiki.com/images/1/11/SteveHeadSSBU.png'},
            {id:83,name:'Sephiroth',icon:'https://www.ssbwiki.com/images/5/5e/SephirothHeadSSBU.png'},
            {id:84,name:'Pyra/Mythra',icon:'https://www.ssbwiki.com/images/f/fc/PyraMythraHeadSSBU.png'},
            {id:85,name:'Kazuya',icon:'https://www.ssbwiki.com/images/6/67/KazuyaHeadSSBU.png'},
            {id:86,name:'Sora',icon:'https://www.ssbwiki.com/images/0/0e/SoraHeadSSBU.png'}
        ]
    )
    const [randomFighter, setRandomFighter] = useState(0)
    const [fighterHistory, setFighterHistory] = useState([])
    const [noMiis, setNoMiis] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const GetRandomFighter = () => {
        let len = fighters.length
        let selectedRandomFighter = fighters[Math.floor(Math.random() * fighters.length)]
        // console.log(selectedRandomFighter)
        setRandomFighter(selectedRandomFighter)

        // Delete Fighter from list
        let tmpList = fighters;
        tmpList = (tmpList => tmpList.filter(fighters => fighters !== randomFighter))
        setFighters(tmpList)

        // Add to History
        let tmpHistory = fighterHistory;
        tmpHistory.push(randomFighter)
        function removeDupes(data) {
            return [...new Set(data)]
        }
        setFighterHistory(removeDupes(tmpHistory))
        // console.log(fighterHistory)

        if (len == 1) {
            document.getElementById("random-btn-id").style.visibility='hidden';
            document.getElementById("current-roster-id").innerText='Complete!';
            document.getElementById("smashroster-id").style.visibility='hidden';
            document.getElementById("mii-btn-id").disabled=true;
        }
    }

    const iHateMiis = () => {
        let miiFighterList = fighters
        let miisOff = noMiis
        let i = 0
        

        if (noMiis == false) {
            console.log("Miis Off")
            while (i < miiFighterList.length) {
                let fighterName = miiFighterList[i].name
                if (fighterName.startsWith("Mii ")) {
                    // console.log("Splicing: " + fighterName)
                    miiFighterList.splice(i, 1)
                    i--
                }
                i++;
            }

            setFighters(miiFighterList)            
            document.getElementById("mii-btn-id").disabled=true;
            document.getElementById("miisoff-message-id").style.display="block";
        }
        else if (noMiis == true) {
            console.log("Miis On")
        }

        miisOff = !miisOff
        setNoMiis(miisOff)
    }

  return (
    <>
        {/* Instructions */}
        <div className="refresh-container">
            <h3 className='refresh-subtitle' onClick={() => window.location.reload(false)}>[ click/refresh to restart ]</h3>
        </div>

        {/* Random Selector */}
        <div className='random-selection-container'>
            {/* Random Button */}
            <div className="random-btn-container">
                <button className='random-btn' id='random-btn-id' onClick={GetRandomFighter}>
                    <img src={qmark} alt="" className='qmark'/>
                </button>
            </div>
            {/* Rnadom Player */}
            <div className="player-container">
                <h2 className="player-title">Fighter</h2>
                <div className="player-fighter-container">
                    <h2 className='player-fighter-name'>{randomFighter.name}</h2>
                    <img src={randomFighter.icon} alt='' className='player-fighter-icon'/>
                </div>
            </div>
        </div>
        {/* CharSelectScreen */}
        <h2 className="currentroster-title" id='current-roster-id'>Current Roster</h2>

        {/* Top CSS Bar */}
        <div className="top-css-container">
            <div className="top-css-left">
                {/* Mii Button */}
                <div className="mii-btn-container">
                    <button className='mii-btn' id='mii-btn-id' onClick={iHateMiis} onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}>
                        <img src={miiLogo} alt="" className='mii-btn-img' id='miibtn-img-id'/>
                    </button>
                    {isHovering && (
                        <div className="removemiis-message">
                            Remove Miis ?
                        </div>
                    )}
                    <div className="miisoff-message" id='miisoff-message-id'>
                        Removed Miis !
                    </div>
                </div>
            </div>
            <div className="top-css-right">
                {/* Roster Count */}
                <h3 className='currentroster-count'>Remaining: {fighters.length}</h3>
            </div>
            
        </div>

        {/* Smash CSS */}
        <div className='smashroster-container' id='smashroster-id'>
            {fighters.map((fighter) => {
                return (
                    <CSSIcon
                        key = {fighter.id}
                        name = {fighter.name}
                        icon = {fighter.icon}
                    />
                )
            })}
        </div>

        {/* Fighter History */}
        <div className='fighterhistory-container'>
            <h2 className="fighterhistory-title">History</h2>
            <div className="fighterhistory-icon-container">
                {fighterHistory.slice(1).map((fighter) => {
                    return (
                        <img src={fighter.icon} alt='' className='fighterhistory-icon'/>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default SmashRoster