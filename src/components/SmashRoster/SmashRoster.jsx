import { useState } from 'react'
import './SmashRoster.css'
import CSSIcon from '../CSSIcon/CSSIcon'
import RandomSelection from '../RandomSelection/RandomSelection'
    
const SmashRoster = () => {
    //  Fighter List
    const [fighters, setFighters] = useState(
        [
            {key:1, name:'Mario',icon:'https://www.ssbwiki.com/images/0/0d/MarioHeadSSBU.png'},
            {key:2,name:'DonkeyKong',icon:'https://www.ssbwiki.com/images/b/ba/DonkeyKongHeadSSBU.png'},
            {key:3,name:'Link',icon:'https://www.ssbwiki.com/images/a/aa/LinkHeadSSBU.png'},
            {key:4,name:'Samus',icon:'https://www.ssbwiki.com/images/7/7f/SamusHeadSSBU.png'},
            {key:5,name:'DarkSamus',icon:'https://www.ssbwiki.com/images/9/96/DarkSamusHeadSSBU.png'},
            {key:6,name:'Yoshi',icon:'https://www.ssbwiki.com/images/0/03/YoshiHeadSSBU.png'},
            {key:7,name:'Kirby',icon:'https://www.ssbwiki.com/images/9/91/KirbyHeadSSBU.png'},
            {key:8,name:'Fox',icon:'https://www.ssbwiki.com/images/0/04/FoxHeadSSBU.png'},
            {key:9,name:'Pikachu',icon:'https://www.ssbwiki.com/images/f/fa/PikachuHeadSSBU.png'},
            {key:10,name:'Luigi',icon:'https://www.ssbwiki.com/images/c/c6/LuigiHeadSSBU.png'},
            {key:11,name:'Ness',icon:'https://www.ssbwiki.com/images/0/0f/NessHeadSSBU.png'},
            {key:12,name:'CaptainFalcon',icon:'https://www.ssbwiki.com/images/3/35/CaptainFalconHeadSSBU.png'},
            {key:13,name:'Jigglypuff',icon:'https://www.ssbwiki.com/images/9/95/JigglypuffHeadSSBU.png'},
            {key:14,name:'Peach',icon:'https://www.ssbwiki.com/images/d/d2/PeachHeadSSBU.png'},
            {key:15,name:'Daisy',icon:'https://www.ssbwiki.com/images/9/96/DaisyHeadSSBU.png'},
            {key:16,name:'Bowser',icon:'https://www.ssbwiki.com/images/b/b5/BowserHeadSSBU.png'},
            {key:17,name:'IceClimbers',icon:'https://www.ssbwiki.com/images/8/8b/IceClimbersHeadSSBU.png'},
            {key:18,name:'Sheik',icon:'https://www.ssbwiki.com/images/3/37/SheikHeadSSBU.png'},
            {key:19,name:'Zelda',icon:'https://www.ssbwiki.com/images/c/c1/ZeldaHeadSSBU.png'},
            {key:20,name:'DrMario',icon:'https://www.ssbwiki.com/images/7/78/DrMarioHeadSSBU.png'},
            {key:21,name:'Pichu',icon:'https://www.ssbwiki.com/images/d/d6/PichuHeadSSBU.png'},
            {key:22,name:'Falco',icon:'https://www.ssbwiki.com/images/2/2f/FalcoHeadSSBU.png'},
            {key:23,name:'Marth',icon:'https://www.ssbwiki.com/images/b/bd/MarthHeadSSBU.png'},
            {key:24,name:'Lucina',icon:'https://www.ssbwiki.com/images/0/04/LucinaHeadSSBU.png'},
            {key:25,name:'YoungLink',icon:'https://www.ssbwiki.com/images/c/cd/YoungLinkHeadSSBU.png'},
            {key:26,name:'Ganondorf',icon:'https://www.ssbwiki.com/images/7/78/GanondorfHeadSSBU.png'},
            {key:27,name:'Mewtwo',icon:'https://www.ssbwiki.com/images/9/96/MewtwoHeadSSBU.png'},
            {key:28,name:'Roy',icon:'https://www.ssbwiki.com/images/e/ed/RoyHeadSSBU.png'},
            {key:29,name:'Chrom',icon:'https://www.ssbwiki.com/images/2/25/ChromHeadSSBU.png'},
            {key:30,name:'MrGame&W',icon:'https://www.ssbwiki.com/images/6/6b/MrGame%26WatchHeadSSBU.png'},
            {key:31,name:'MetaKnight',icon:'https://www.ssbwiki.com/images/d/de/MetaKnightHeadSSBU.png'},
            {key:32,name:'Pit',icon:'https://www.ssbwiki.com/images/a/aa/PitHeadSSBU.png'},
            {key:33,name:'DarkPit',icon:'https://www.ssbwiki.com/images/e/ed/DarkPitHeadSSBU.png'},
            {key:34,name:'ZeroSuitSamus',icon:'https://www.ssbwiki.com/images/7/71/ZeroSuitSamusHeadSSBU.png'},
            {key:35,name:'Wario',icon:'https://www.ssbwiki.com/images/0/05/WarioHeadSSBU.png'},
            {key:36,name:'Snake',icon:'https://www.ssbwiki.com/images/9/9a/SnakeHeadSSBU.png'},
            {key:37,name:'Ike',icon:'https://www.ssbwiki.com/images/b/b2/IkeHeadSSBU.png'},
            {key:38,name:'PkmTrainer',icon:'https://www.ssbwiki.com/images/0/09/Pok%C3%A9monTrainerHeadSSBU.png'},
            {key:39,name:'DiddyKong',icon:'https://www.ssbwiki.com/images/3/36/DiddyKongHeadSSBU.png'},
            {key:40,name:'Lucas',icon:'https://www.ssbwiki.com/images/f/ff/LucasHeadSSBU.png'},
            {key:41,name:'Sonic',icon:'https://www.ssbwiki.com/images/7/76/SonicHeadSSBU.png'},
            {key:42,name:'KingDDD',icon:'https://www.ssbwiki.com/images/b/bb/KingDededeHeadSSBU.png'},
            {key:43,name:'Olimar',icon:'https://www.ssbwiki.com/images/9/91/OlimarHeadSSBU.png'},
            {key:44,name:'Lucario',icon:'https://www.ssbwiki.com/images/c/cd/LucarioHeadSSBU.png'},
            {key:45,name:'R.O.B.',icon:'https://www.ssbwiki.com/images/b/b3/ROBHeadSSBU.png'},
            {key:46,name:'ToonLink',icon:'https://www.ssbwiki.com/images/e/e6/ToonLinkHeadSSBU.png'},
            {key:47,name:'Wolf',icon:'https://www.ssbwiki.com/images/e/e8/WolfHeadSSBU.png'},
            {key:48,name:'Villager',icon:'https://www.ssbwiki.com/images/b/b9/VillagerHeadSSBU.png'},
            {key:49,name:'MegaMan',icon:'https://www.ssbwiki.com/images/5/55/MegaManHeadSSBU.png'},
            {key:50,name:'WiiFit',icon:'https://www.ssbwiki.com/images/8/87/WiiFitTrainerHeadSSBU.png'},
            {key:51,name:'Rosalina',icon:'https://www.ssbwiki.com/images/e/e8/RosalinaHeadSSBU.png'},
            {key:52,name:'LilMac',icon:'https://www.ssbwiki.com/images/1/10/LittleMacHeadSSBU.png'},
            {key:53,name:'Greninja',icon:'https://www.ssbwiki.com/images/6/65/GreninjaHeadSSBU.png'},
            {key:54,name:'Palutena',icon:'https://www.ssbwiki.com/images/a/a9/PalutenaHeadSSBU.png'},
            {key:55,name:'Pac-Man',icon:'https://www.ssbwiki.com/images/4/45/Pac-ManHeadSSBU.png'},
            {key:56,name:'Robin',icon:'https://www.ssbwiki.com/images/2/25/RobinHeadSSBU.png'},
            {key:57,name:'Shulk',icon:'https://www.ssbwiki.com/images/c/c1/ShulkHeadSSBU.png'},
            {key:58,name:'BowserJr',icon:'https://www.ssbwiki.com/images/0/07/BowserJrHeadSSBU.png'},
            {key:59,name:'DuckHunt',icon:'https://www.ssbwiki.com/images/a/a1/DuckHuntHeadSSBU.png'},
            {key:60,name:'Ryu',icon:'https://www.ssbwiki.com/images/f/fb/RyuHeadSSBU.png'},
            {key:61,name:'Ken',icon:'https://www.ssbwiki.com/images/7/72/KenHeadSSBU.png'},
            {key:62,name:'Cloud',icon:'https://www.ssbwiki.com/images/3/3b/CloudHeadSSBU.png'},
            {key:63,name:'Corrin',icon:'https://www.ssbwiki.com/images/c/cf/CorrinHeadSSBU.png'},
            {key:64,name:'Bayonetta',icon:'https://www.ssbwiki.com/images/6/6c/BayonettaHeadSSBU.png'},
            {key:65,name:'Inkling',icon:'https://www.ssbwiki.com/images/f/f1/InklingHeadSSBU.png'},
            {key:66,name:'Ridley',icon:'https://www.ssbwiki.com/images/5/5b/RidleyHeadSSBU.png'},
            {key:67,name:'Simon',icon:'https://www.ssbwiki.com/images/d/df/SimonHeadSSBU.png'},
            {key:68,name:'Richter',icon:'https://www.ssbwiki.com/images/0/07/RichterHeadSSBU.png'},
            {key:69,name:'KingKRool',icon:'https://www.ssbwiki.com/images/d/de/KingKRoolHeadSSBU.png'},
            {key:70,name:'Isabelle',icon:'https://www.ssbwiki.com/images/2/2f/IsabelleHeadSSBU.png'},
            {key:71,name:'Incineroar',icon:'https://www.ssbwiki.com/images/5/50/IncineroarHeadSSBU.png'},
            {key:72,name:'MiiBrawler',icon:'https://www.ssbwiki.com/images/d/d8/MiiBrawlerHeadSSBU.png'},
            {key:73,name:'MiiSword',icon:'https://www.ssbwiki.com/images/e/ef/MiiSwordfighterHeadSSBU.png'},
            {key:74,name:'MiiGunner',icon:'https://www.ssbwiki.com/images/3/3d/MiiGunnerHeadSSBU.png'},
            {key:75,name:'PirahnaPlant',icon:'https://www.ssbwiki.com/images/3/38/PiranhaPlantHeadSSBU.png'},
            {key:76,name:'Joker',icon:'https://www.ssbwiki.com/images/2/25/JokerHeadSSBU.png'},
            {key:77,name:'Hero',icon:'https://www.ssbwiki.com/images/3/3d/HeroHeadSSBU.png'},
            {key:78,name:'Banjo&K',icon:'https://www.ssbwiki.com/images/6/60/Banjo%26KazooieHeadSSBU.png'},
            {key:79,name:'Terry',icon:'https://www.ssbwiki.com/images/f/f9/TerryHeadSSBU.png'},
            {key:80,name:'Byleth',icon:'https://www.ssbwiki.com/images/a/a2/BylethHeadSSBU.png'},
            {key:81,name:'MinMin',icon:'https://www.ssbwiki.com/images/d/de/MinMinHeadSSBU.png'},
            {key:82,name:'Steve',icon:'https://www.ssbwiki.com/images/1/11/SteveHeadSSBU.png'},
            {key:83,name:'Sephiroth',icon:'https://www.ssbwiki.com/images/5/5e/SephirothHeadSSBU.png'},
            {key:84,name:'Aegis',icon:'https://www.ssbwiki.com/images/f/fc/PyraMythraHeadSSBU.png'},
            {key:85,name:'Kazuya',icon:'https://www.ssbwiki.com/images/6/67/KazuyaHeadSSBU.png'},
            {key:86,name:'Sora',icon:'https://www.ssbwiki.com/images/0/0e/SoraHeadSSBU.png'}
        ]
    )
    
  return (
    <>
        <RandomSelection fighters={fighters}/>
        <h2 className="currentroster-title">Current Roster</h2>
        <div className='smashroster-container'>
            {fighters.map((fighter) => {
                return (
                    <CSSIcon
                        key = {fighter.key}
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