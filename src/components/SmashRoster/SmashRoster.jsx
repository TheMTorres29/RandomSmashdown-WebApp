import { useState, useEffect } from 'react'
import './SmashRoster.css'
import CSSIcon from '../CSSIcon/CSSIcon'
import qmark from '../../assets/images/marioqmark.png'
import miiLogo from '../../assets/images/miilogo.png'
import refreshIcon from '../../assets/images/refresh-icon.png'
import ink1 from '../../assets/images/ink-splatter-1.png'

    
const SmashRoster = () => {
    //  Fighter List
    const [fighters, setFighters] = useState(
        [
            {id:1, name:'Mario',icon:'https://www.ssbwiki.com/images/0/0d/MarioHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/mario/main.png', bg:'#FF4026', emblem:'https://www.ssbwiki.com/images/3/30/MarioSymbol.svg'},
            {id:2,name:'Donkey Kong',icon:'https://www.ssbwiki.com/images/b/ba/DonkeyKongHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/donkey_kong/main.png', bg:'#F9DA4A', emblem:'https://www.ssbwiki.com/images/c/c2/DKSymbol.svg'},
            {id:3,name:'Link',icon:'https://www.ssbwiki.com/images/a/aa/LinkHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/link/main.png', bg:'#1C94C3', emblem:'https://www.ssbwiki.com/images/7/74/ZeldaSymbol.svg'},
            {id:4,name:'Samus',icon:'https://www.ssbwiki.com/images/7/7f/SamusHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/samus/main.png', bg:'#353F56', emblem:'https://www.ssbwiki.com/images/4/41/MetroidSymbol.svg'},
            {id:5,name:'Dark Samus',icon:'https://www.ssbwiki.com/images/9/96/DarkSamusHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/dark_samus/main.png', bg:'#3D395E', emblem:'https://www.ssbwiki.com/images/4/41/MetroidSymbol.svg'},
            {id:6,name:'Yoshi',icon:'https://www.ssbwiki.com/images/0/03/YoshiHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/yoshi/main.png', bg:'#83CD65', emblem:'https://www.ssbwiki.com/images/d/db/YoshiSymbol.svg'},
            {id:7,name:'Kirby',icon:'https://www.ssbwiki.com/images/9/91/KirbyHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/kirby/main.png', bg:'#FED6E3', emblem:'https://www.ssbwiki.com/images/0/0e/KirbySymbol.svg'},
            {id:8,name:'Fox',icon:'https://www.ssbwiki.com/images/0/04/FoxHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/fox/main.png', bg:'#307CDF', emblem:'https://www.ssbwiki.com/images/b/be/StarFoxSymbol.svg'},
            {id:9,name:'Pikachu',icon:'https://www.ssbwiki.com/images/f/fa/PikachuHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png', bg:'#FFB912', emblem:'https://www.ssbwiki.com/images/c/ca/PokemonSymbol.svg'},
            {id:10,name:'Luigi',icon:'https://www.ssbwiki.com/images/c/c6/LuigiHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/luigi/main.png', bg:'#5EA444', emblem:'https://www.ssbwiki.com/images/3/30/MarioSymbol.svg'},
            {id:11,name:'Ness',icon:'https://www.ssbwiki.com/images/0/0f/NessHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/ness/main.png', bg:'#DE413D', emblem:'https://www.ssbwiki.com/images/5/51/EarthboundSymbol.svg'},
            {id:12,name:'Captain Falcon',icon:'https://www.ssbwiki.com/images/3/35/CaptainFalconHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/captain_falcon/main.png', bg:'#8E8ADC', emblem:'https://www.ssbwiki.com/images/2/2f/FZeroSymbol.svg'},
            {id:13,name:'Jigglypuff',icon:'https://www.ssbwiki.com/images/9/95/JigglypuffHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/jigglypuff/main.png', bg:'#F29BF6', emblem:'https://www.ssbwiki.com/images/c/ca/PokemonSymbol.svg'},
            {id:14,name:'Peach',icon:'https://www.ssbwiki.com/images/d/d2/PeachHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/peach/main.png', bg:'#F5C9F0', emblem:'https://www.ssbwiki.com/images/3/30/MarioSymbol.svg'},
            {id:15,name:'Daisy',icon:'https://www.ssbwiki.com/images/9/96/DaisyHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/daisy/main.png', bg:'#F0BB2C', emblem:'https://www.ssbwiki.com/images/3/30/MarioSymbol.svg'},
            {id:16,name:'Bowser',icon:'https://www.ssbwiki.com/images/b/b5/BowserHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/bowser/main.png', bg:'#44745E', emblem:'https://www.ssbwiki.com/images/3/30/MarioSymbol.svg'},
            {id:17,name:'Ice Climbers',icon:'https://www.ssbwiki.com/images/8/8b/IceClimbersHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/ice_climbers/main.png', bg:'#A0CAFE', emblem:'https://www.ssbwiki.com/images/1/1d/IceClimberSymbol.svg'},
            {id:19,name:'Zelda',icon:'https://www.ssbwiki.com/images/c/c1/ZeldaHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/zelda/main.png', bg:'#FDEAA4', emblem:'https://www.ssbwiki.com/images/7/74/ZeldaSymbol.svg'},
            {id:18,name:'Sheik',icon:'https://www.ssbwiki.com/images/3/37/SheikHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/sheik/main.png', bg:'#756FD0', emblem:'https://www.ssbwiki.com/images/7/74/ZeldaSymbol.svg'},
            {id:20,name:'Dr. Mario',icon:'https://www.ssbwiki.com/images/7/78/DrMarioHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/dr_mario/main.png', bg:'#E86C6D', emblem:'https://www.ssbwiki.com/images/3/30/MarioSymbol.svg'},
            {id:21,name:'Pichu',icon:'https://www.ssbwiki.com/images/d/d6/PichuHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/pichu/main.png', bg:'#DEDC1F', emblem:'https://www.ssbwiki.com/images/c/ca/PokemonSymbol.svg'},
            {id:22,name:'Falco',icon:'https://www.ssbwiki.com/images/2/2f/FalcoHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/falco/main.png', bg:'#69B0DE', emblem:'https://www.ssbwiki.com/images/b/be/StarFoxSymbol.svg'},
            {id:23,name:'Marth',icon:'https://www.ssbwiki.com/images/b/bd/MarthHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/marth/main.png', bg:'#5DA8C8', emblem:'https://www.ssbwiki.com/images/2/2a/FireEmblemSymbol.svg'},
            {id:24,name:'Lucina',icon:'https://www.ssbwiki.com/images/0/04/LucinaHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/lucina/main.png', bg:'#7EA6C7', emblem:'https://www.ssbwiki.com/images/2/2a/FireEmblemSymbol.svg'},
            {id:25,name:'Young Link',icon:'https://www.ssbwiki.com/images/c/cd/YoungLinkHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/young_link/main.png', bg:'#A5D160', emblem:'https://www.ssbwiki.com/images/7/74/ZeldaSymbol.svg'},
            {id:26,name:'Ganondorf',icon:'https://www.ssbwiki.com/images/7/78/GanondorfHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/ganondorf/main.png', bg:'#7974A4', emblem:'https://www.ssbwiki.com/images/7/74/ZeldaSymbol.svg'},
            {id:27,name:'Mewtwo',icon:'https://www.ssbwiki.com/images/9/96/MewtwoHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/mewtwo/main.png', bg:'#927BC5', emblem:'https://www.ssbwiki.com/images/c/ca/PokemonSymbol.svg'},
            {id:28,name:'Roy',icon:'https://www.ssbwiki.com/images/e/ed/RoyHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/roy/main.png', bg:'#74B65D', emblem:'https://www.ssbwiki.com/images/2/2a/FireEmblemSymbol.svg'},
            {id:29,name:'Chrom',icon:'https://www.ssbwiki.com/images/2/25/ChromHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/chrom/main.png', bg:'#B4B4CF', emblem:'https://www.ssbwiki.com/images/2/2a/FireEmblemSymbol.svg'},
            {id:30,name:'Mr. Game & Watch',icon:'https://www.ssbwiki.com/images/6/6b/MrGame%26WatchHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/mr_game_and_watch/main.png', bg:'#A4A190', emblem:'https://www.ssbwiki.com/images/2/2b/Game%26WatchSymbol.svg'},
            {id:31,name:'Meta Knight',icon:'https://www.ssbwiki.com/images/d/de/MetaKnightHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/meta_knight/main.png', bg:'#5367B0', emblem:'https://www.ssbwiki.com/images/0/0e/KirbySymbol.svg'},
            {id:32,name:'Pit',icon:'https://www.ssbwiki.com/images/a/aa/PitHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/pit/main.png', bg:'#ACDAFA', emblem:'https://www.ssbwiki.com/images/5/52/KidIcarusSymbol.svg'},
            {id:33,name:'Dark Pit',icon:'https://www.ssbwiki.com/images/e/ed/DarkPitHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/dark_pit/main.png', bg:'#875CBE', emblem:'https://www.ssbwiki.com/images/5/52/KidIcarusSymbol.svg'},
            {id:34,name:'Zero Suit Samus',icon:'https://www.ssbwiki.com/images/7/71/ZeroSuitSamusHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/zero_suit_samus/main.png', bg:'#205BA4', emblem:'https://www.ssbwiki.com/images/4/41/MetroidSymbol.svg'},
            {id:35,name:'Wario',icon:'https://www.ssbwiki.com/images/0/05/WarioHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/wario/main.png', bg:'#FEE71F', emblem:'https://www.ssbwiki.com/images/e/e9/WarioSymbol.svg'},
            {id:36,name:'Snake',icon:'https://www.ssbwiki.com/images/9/9a/SnakeHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/snake/main.png', bg:'#658198', emblem:'https://www.ssbwiki.com/images/1/18/MetalGearSymbol.svg'},
            {id:37,name:'Ike',icon:'https://www.ssbwiki.com/images/b/b2/IkeHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/ike/main.png', bg:'#B64F3E', emblem:'https://www.ssbwiki.com/images/2/2a/FireEmblemSymbol.svg'},
            {id:38,name:'Pokemon Trainer',icon:'https://www.ssbwiki.com/images/0/09/Pok%C3%A9monTrainerHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/pokemon_trainer/main.png', bg:'#FFC004', emblem:'https://www.ssbwiki.com/images/c/ca/PokemonSymbol.svg'},
            {id:39,name:'Diddy Kong',icon:'https://www.ssbwiki.com/images/3/36/DiddyKongHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/diddy_kong/main.png', bg:'#E05A52', emblem:'https://www.ssbwiki.com/images/c/c2/DKSymbol.svg'},
            {id:40,name:'Lucas',icon:'https://www.ssbwiki.com/images/f/ff/LucasHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/lucas/main.png', bg:'#E06833', emblem:'https://www.ssbwiki.com/images/5/51/EarthboundSymbol.svg'},
            {id:41,name:'Sonic',icon:'https://www.ssbwiki.com/images/7/76/SonicHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/sonic/main.png', bg:'#659DEB', emblem:'https://www.ssbwiki.com/images/9/9f/SonicSymbol.svg'},
            {id:42,name:'King DeDeDe',icon:'https://www.ssbwiki.com/images/b/bb/KingDededeHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/king_dedede/main.png', bg:'#FCE87B', emblem:'https://www.ssbwiki.com/images/0/0e/KirbySymbol.svg'},
            {id:43,name:'Olimar',icon:'https://www.ssbwiki.com/images/9/91/OlimarHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/olimar/main.png', bg:'#CCEFB0', emblem:'https://www.ssbwiki.com/images/6/61/PikminSymbol.svg'},
            {id:44,name:'Lucario',icon:'https://www.ssbwiki.com/images/c/cd/LucarioHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/lucario/main.png', bg:'#B8E3FC', emblem:'https://www.ssbwiki.com/images/c/ca/PokemonSymbol.svg'},
            {id:45,name:'R.O.B.',icon:'https://www.ssbwiki.com/images/b/b3/ROBHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/rob/main.png', bg:'#B2B8BD', emblem:'https://www.ssbwiki.com/images/d/d4/ROBSymbol.svg'},
            {id:46,name:'Toon Link',icon:'https://www.ssbwiki.com/images/e/e6/ToonLinkHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/toon_link/main.png', bg:'#8CE689', emblem:'https://www.ssbwiki.com/images/7/74/ZeldaSymbol.svg'},
            {id:47,name:'Wolf',icon:'https://www.ssbwiki.com/images/e/e8/WolfHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/wolf/main.png', bg:'#CCCCCC', emblem:'https://www.ssbwiki.com/images/b/be/StarFoxSymbol.svg'},
            {id:48,name:'Villager',icon:'https://www.ssbwiki.com/images/b/b9/VillagerHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/villager/main.png', bg:'#83A88E', emblem:'https://www.ssbwiki.com/images/e/e9/AnimalCrossingSymbol.svg'},
            {id:49,name:'Mega Man',icon:'https://www.ssbwiki.com/images/5/55/MegaManHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/mega_man/main.png', bg:'#86C1E0', emblem:'https://www.ssbwiki.com/images/a/ad/MegaManSymbol.svg'},
            {id:50,name:'Wii Fit Trainer',icon:'https://www.ssbwiki.com/images/8/87/WiiFitTrainerHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/wii_fit_trainer/main.png', bg:'#99D481', emblem:'https://www.ssbwiki.com/images/7/7f/WiiFitSymbol.svg'},
            {id:51,name:'Rosalina & Luma',icon:'https://www.ssbwiki.com/images/e/e8/RosalinaHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/rosalina_and_luma/main.png', bg:'#98D5CD', emblem:'https://www.ssbwiki.com/images/3/30/MarioSymbol.svg'},
            {id:52,name:'Little Mac',icon:'https://www.ssbwiki.com/images/1/10/LittleMacHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/little_mac/main.png', bg:'#5D8F72', emblem:'https://www.ssbwiki.com/images/1/17/PunchOutSymbol.svg'},
            {id:53,name:'Greninja',icon:'https://www.ssbwiki.com/images/6/65/GreninjaHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/greninja/main.png', bg:'#5673A5', emblem:'https://www.ssbwiki.com/images/c/ca/PokemonSymbol.svg'},
            {id:54,name:'Palutena',icon:'https://www.ssbwiki.com/images/a/a9/PalutenaHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/palutena/main.png', bg:'#91E5C1', emblem:'https://www.ssbwiki.com/images/5/52/KidIcarusSymbol.svg'},
            {id:55,name:'Pac-Man',icon:'https://www.ssbwiki.com/images/4/45/Pac-ManHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/pac_man/main.png', bg:'#FCB541', emblem:'https://www.ssbwiki.com/images/1/1b/PacManSymbol.svg'},
            {id:56,name:'Robin',icon:'https://www.ssbwiki.com/images/2/25/RobinHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/robin/main.png', bg:'#C387D9', emblem:'https://www.ssbwiki.com/images/2/2a/FireEmblemSymbol.svg'},
            {id:57,name:'Shulk',icon:'https://www.ssbwiki.com/images/c/c1/ShulkHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/shulk/main.png', bg:'#D5647A', emblem:'https://www.ssbwiki.com/images/3/35/XenobladeSymbol.svg'},
            {id:58,name:'Bowser Jr.',icon:'https://www.ssbwiki.com/images/0/07/BowserJrHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/bowser_jr/main.png', bg:'#59BF38', emblem:'https://www.ssbwiki.com/images/3/30/MarioSymbol.svg'},
            {id:59,name:'Duck Hunt',icon:'https://www.ssbwiki.com/images/a/a1/DuckHuntHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/duck_hunt/main.png', bg:'#8C5D3A', emblem:'https://www.ssbwiki.com/images/4/47/DuckHuntSymbol.svg'},
            {id:60,name:'Ryu',icon:'https://www.ssbwiki.com/images/f/fb/RyuHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/ryu/main.png', bg:'#D0504D', emblem:'https://www.ssbwiki.com/images/8/84/StreetFighterSymbol.svg'},
            {id:61,name:'Ken',icon:'https://www.ssbwiki.com/images/7/72/KenHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/ken/main.png', bg:'#CDD7DC', emblem:'https://www.ssbwiki.com/images/8/84/StreetFighterSymbol.svg'},
            {id:62,name:'Cloud',icon:'https://www.ssbwiki.com/images/3/3b/CloudHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/cloud/main.png', bg:'#419384', emblem:'https://www.ssbwiki.com/images/c/ce/FinalFantasySymbol.svg'},
            {id:63,name:'Corrin',icon:'https://www.ssbwiki.com/images/c/cf/CorrinHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/corrin/main.png', bg:'#63A7C0', emblem:'https://www.ssbwiki.com/images/2/2a/FireEmblemSymbol.svg'},
            {id:64,name:'Bayonetta',icon:'https://www.ssbwiki.com/images/6/6c/BayonettaHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/bayonetta/main.png', bg:'#A5A1E0', emblem:'https://www.ssbwiki.com/images/3/38/BayonettaSymbol.svg'},
            {id:65,name:'Inkling',icon:'https://www.ssbwiki.com/images/f/f1/InklingHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/inkling/main.png', bg:'#F02D7D', emblem:'https://www.ssbwiki.com/images/0/08/SplatoonSymbol.svg'},
            {id:66,name:'Ridley',icon:'https://www.ssbwiki.com/images/5/5b/RidleyHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/ridley/main.png', bg:'#71456F', emblem:'https://www.ssbwiki.com/images/4/41/MetroidSymbol.svg'},
            {id:67,name:'Simon',icon:'https://www.ssbwiki.com/images/d/df/SimonHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/simon/main.png', bg:'#76150E', emblem:'https://www.ssbwiki.com/images/a/a7/CastlevaniaSymbol.svg'},
            {id:68,name:'Richter',icon:'https://www.ssbwiki.com/images/0/07/RichterHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/richter/main.png', bg:'#2A6DB0', emblem:'https://www.ssbwiki.com/images/a/a7/CastlevaniaSymbol.svg'},
            {id:69,name:'King K. Rool',icon:'https://www.ssbwiki.com/images/d/de/KingKRoolHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main.png', bg:'#65873B', emblem:'https://www.ssbwiki.com/images/c/c2/DKSymbol.svg'},
            {id:70,name:'Isabelle',icon:'https://www.ssbwiki.com/images/2/2f/IsabelleHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/isabelle/main.png', bg:'#C4D37E', emblem:'https://www.ssbwiki.com/images/e/e9/AnimalCrossingSymbol.svg'},
            {id:71,name:'Incineroar',icon:'https://www.ssbwiki.com/images/5/50/IncineroarHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/incineroar/main.png', bg:'#FFD902', emblem:'https://www.ssbwiki.com/images/c/ca/PokemonSymbol.svg'},
            {id:72,name:'Mii Brawler',icon:'https://www.ssbwiki.com/images/d/d8/MiiBrawlerHeadSSBU.png', portrait:'https://ssb.wiki.gallery/images/e/e4/Mii_Brawler_SSBU.png', bg:'#CCE5E5', emblem:'https://www.ssbwiki.com/images/c/c2/SmashBrosSymbol.svg'},
            {id:73,name:'Mii Swordfighter',icon:'https://www.ssbwiki.com/images/e/ef/MiiSwordfighterHeadSSBU.png', portrait:'https://ssb.wiki.gallery/images/f/fa/Mii_Swordfighter_SSBU.png', bg:'#CCE5E5', emblem:'https://www.ssbwiki.com/images/c/c2/SmashBrosSymbol.svg'},
            {id:74,name:'Mii Gunner',icon:'https://www.ssbwiki.com/images/3/3d/MiiGunnerHeadSSBU.png', portrait:'https://ssb.wiki.gallery/images/e/e5/Mii_Gunner_SSBU.png', bg:'#CCE5E5', emblem:'https://www.ssbwiki.com/images/c/c2/SmashBrosSymbol.svg'},
            {id:75,name:'Piranha Plant',icon:'https://www.ssbwiki.com/images/3/38/PiranhaPlantHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/piranha_plant/main.png', bg:'#00aa82', emblem:'https://www.ssbwiki.com/images/3/30/MarioSymbol.svg'},
            {id:76,name:'Joker',icon:'https://www.ssbwiki.com/images/2/25/JokerHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/joker/main.png', bg:'#B41201', emblem:'https://www.ssbwiki.com/images/b/b1/PersonaSymbol.svg'},
            {id:77,name:'Hero',icon:'https://www.ssbwiki.com/images/3/3d/HeroHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/dq_hero/main.png', bg:'#CCB34A', emblem:'https://www.ssbwiki.com/images/a/a6/DragonQuestSymbol.svg'},
            {id:78,name:'Banjo & Kazooie',icon:'https://www.ssbwiki.com/images/6/60/Banjo%26KazooieHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/banjo_and_kazooie/main.png', bg:'#FCDD76', emblem:'https://www.ssbwiki.com/images/0/00/BanjoKazooieSymbol.svg'},
            {id:79,name:'Terry',icon:'https://www.ssbwiki.com/images/f/f9/TerryHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/terry/main.png', bg:'#6E85FF', emblem:'https://www.ssbwiki.com/images/d/d2/FatalFurySymbol.svg'},
            {id:80,name:'Byleth',icon:'https://www.ssbwiki.com/images/a/a2/BylethHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/byleth/main.png', bg:'#CEE0D4', emblem:'https://www.ssbwiki.com/images/2/2a/FireEmblemSymbol.svg'},
            {id:81,name:'Min Min',icon:'https://www.ssbwiki.com/images/d/de/MinMinHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/minmin/main.png', bg:'#FFFF5A', emblem:'https://www.ssbwiki.com/images/8/85/ARMSSymbol.svg'},
            {id:82,name:'Steve',icon:'https://www.ssbwiki.com/images/1/11/SteveHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/steve/main.png', bg:'#5ABEFF', emblem:'https://www.ssbwiki.com/images/0/02/MinecraftSymbol.svg'},
            {id:83,name:'Sephiroth',icon:'https://www.ssbwiki.com/images/5/5e/SephirothHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/sephiroth/main.png', bg:'#374B4B', emblem:'https://www.ssbwiki.com/images/c/ce/FinalFantasySymbol.svg'},
            {id:84,name:'Pyra/Mythra',icon:'https://www.ssbwiki.com/images/f/fc/PyraMythraHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/pyra/main.png', bg:'#69E6C3', emblem:'https://www.ssbwiki.com/images/3/35/XenobladeSymbol.svg'},
            {id:85,name:'Kazuya',icon:'https://www.ssbwiki.com/images/6/67/KazuyaHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/kazuya/main.png', bg:'#A52319', emblem:'https://www.ssbwiki.com/images/a/a2/TekkenSymbol.svg'},
            {id:86,name:'Sora',icon:'https://www.ssbwiki.com/images/0/0e/SoraHeadSSBU.png', portrait:'https://www.smashbros.com/assets_v2/img/fighter/sora/main.png', bg:'#F9F9F9', emblem:'https://www.ssbwiki.com/images/c/ce/KingdomHeartsSymbol.svg'},
        ]
    )
    const [randomFighter, setRandomFighter] = useState(0)
    const [fighterHistory, setFighterHistory] = useState([])
    const [noMiis, setNoMiis] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [slide, setSlide] = useState(0)
    const [fighterEmblem, setFighterEmblem] = useState(0)
    const [fighterBgColor, setFighterBgColor] = useState(0)
    const [inkSplat, setInkSplat] = useState(0)
    
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const GetRandomFighter = () => {
        let selectedRandomFighter = fighters[Math.floor(Math.random() * fighters.length)]
        // console.log(selectedRandomFighter)
        setRandomFighter(selectedRandomFighter)
        setInkSplat(ink1)

        // Fighter Background Slide-In
        // document.getElementById("fighter-background-id").style.display = 'block';
        document.getElementById("fighter-background-id").style.outline='solid 3px white';
        setFighterEmblem(selectedRandomFighter.emblem)
        setFighterBgColor(selectedRandomFighter.bg)
        setSlide(1)



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

        // Hide Random Button when FighterList length = 1
        let len = fighters.length
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

    useEffect(() => {
        document.getElementById("fighter-background-id").style.backgroundColor = fighterBgColor
    }, [fighterBgColor])

  return (
    <>
        {/* Refresh */}
        <div className="refresh-btn-container">
            <button className='refresh-btn' onClick={() => window.location.reload(false)}>
                <img src={refreshIcon} alt="" className='refresh-img' />
            </button>
        </div>
        <div className="refresh-container">
            <h3 className='refresh-subtitle'>[ refresh to restart ]</h3>
        </div>

        {/* Random Selector */}
        <div className='random-selection-container' id='fighter-background-id' backgroundcolor={fighterBgColor} >
            {/* Fighter Background */}
            <div className="fighter-background-container" >
                <img className='fighter-portrait' id='fighter-portrait-id' src={randomFighter.portrait} alt=''
                    slide={slide} onAnimationEnd={() => setSlide(0)} loading='lazy' />
                <img className='fighter-ink-background' id='ink-background-id' src={inkSplat} alt='' 
                    slide={slide} onAnimationEnd={() => setSlide(0)} loading='lazy' />
                <img className='fighter-emblem' id='fighter-emblem-id' src={fighterEmblem} alt='' 
                    slide={slide} onAnimationEnd={() => setSlide(0)} loading='lazy' />
            </div>
            {/* Random Button */}
            <div className="random-btn-container">
                <button className='random-btn' id='random-btn-id' onClick={GetRandomFighter}>
                    <img src={qmark} alt="" className='qmark'/>
                </button>
            </div>
            {/* Random Player */}
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
                        <img src={fighter.icon} alt='' className='fighterhistory-icon' />
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default SmashRoster