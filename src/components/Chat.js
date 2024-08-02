import React, { useState } from 'react';
import AddMedia from '../assets/chatbox/AddMedia.png';
import Send from '../assets/chatbox/Send.png';

const Chat = (props) => {
    const [listItem, setListItem] = useState("");

    function updateMsg (event)
    {
        event.preventDefault();
        props.handleMessage(listItem);
    }
    
    return (
        <div id="chat">
            <img src={AddMedia} id="AddMediaImg" alt="Add Media Icon"></img>
            <form onSubmit={updateMsg}>
                <input type="text" value={listItem} onChange={(e) => setListItem(e.target.value)}></input>
            </form>
            <img src={Send} id="SendImg" alt="Send Message Icon (display only)"></img>
        </div>
    );
}

export default Chat
