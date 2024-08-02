import React from 'react';
import Club_0 from '../assets/chatlogo/Club_0.png';
import Club_1 from '../assets/chatlogo/Club_1.png';
import Club_2 from '../assets/chatlogo/Club_2.png';

const ChatLogo = (props) => {
    let imageName = {
        "Club_0": Club_0,
        "Club_1": Club_1,
        "Club_2": Club_2
    };

    return (
        <div>
            <img src={imageName[props.club]} alt="Chat Picture" id="SecondTopMenu"></img>
        </div>
    );
}

export default ChatLogo
