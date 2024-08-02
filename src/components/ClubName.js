import React from 'react';
import Club_0 from '../assets/chatlogo/Club_0.png';
import Club_1 from '../assets/chatlogo/Club_1.png';
import Club_2 from '../assets/chatlogo/Club_2.png';
import Info from '../assets/chatlogo/Info.png';

const ClubName = (props) => {
    let imageName = {
        "Club_0": Club_0,
        "Club_1": Club_1,
        "Club_2": Club_2
    };

    let clubName = {
        "Club_0": "Club Chat",
        "Club_1": "Mazinger Z",
        "Club_2": "Jigsaw Club"
    }

    return (
        <div id="ClubName">
            <img src={imageName[props.club]} id="ClubNameImg"></img>
            <p id="ClubNameName">{clubName[props.club]}</p>
            <img src={Info} id="InfoImg"></img>
        </div>
    );
}

export default ClubName
