import React from 'react';
import Battery from '../assets/topmenu/Battery.png';
import Camera from '../assets/topmenu/Camera.png';
import MobileData from '../assets/topmenu/MobileData.png';

const TopMenu = () => {
    return (
        <div id="TopMenu">
            <img src={Camera} alt="Camera" class="TopMenu" id="Camera"></img>
            <img src={MobileData} alt="Mobile Data Signal" class="TopMenu" id="MobileData"></img>
            <img src={Battery} alt="Battery" class="TopMenu" id="Battery"></img>
        </div>
    );
}

export default TopMenu
