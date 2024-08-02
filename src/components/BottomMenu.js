import React from 'react';
import Hamburger from '../assets/bottommenu/Hamburger.png';
import Home from '../assets/bottommenu/Home.png';
import Back from '../assets/bottommenu/Back.png';

const BottomMenu = () => {
    return (
        <div id="BottomMenu">
            <img src={Hamburger} alt="Hamburger" class="BottomMenu" id="Hamburger"></img>
            <img src={Home} alt="Home" class="BottomMenu" id="Home"></img>
            <img src={Back} alt="Back" class="BottomMenu" id="Back"></img>
        </div>
    )
}

export default BottomMenu
