import React from 'react';
import Club_Leader from '../assets/profilepics/Club_Leader.png';
import Friend_A from '../assets/profilepics/Friend_A.png';
import Friend_B from '../assets/profilepics/Friend_B.png';
import Me from '../assets/profilepics/Me.png';
import Ricky from '../assets/profilepics/Me.png';

const Images = (props) => {
    let imageName = {
        "Club_Leader": Club_Leader,
        "Friend_A": Friend_A,
        "Friend_B": Friend_B,
        "Me": Me,
        "Ricky": Ricky
    };

    if (props.name === "Me")
        return (
            <img src={imageName[props.name]} alt="Profile Picture" class="pfp_me"></img> 
        );
    else
        return (
            <img src={imageName[props.name]} alt="Profile Picture" class="pfp"></img> 
        );
}

export default Images
