import './App.css';
import TopMenu from './components/TopMenu.js';
import ChatLogo from './components/ChatLogo.js';
import ClubName from './components/ClubName.js';
import Messages from './components/Messages.js';
import BottomMenu from './components/BottomMenu.js';
import Chat from './components/Chat.js';
import { useState } from 'react';

function App() {
    const [list, setList] = useState([]);
    const [id, setId] = useState(0);
    
    let timeStart = "18:43:12";
    const timeNow = new Date();
    const [currDate, setCurrDate] = useState(timeNow);

    function handleMessage (Msg) {
        const newDate = new Date();
        let timeDiff = (newDate.getTime() - currDate.getTime())/1000;
        let timeElapsed = `${timeDiff/3600}:${timeDiff/60}:${timeDiff}`
        let split_msg = Msg.split(';');
        let Message = {
            timeStart: timeStart,
            timeElapsed: timeElapsed,
            name: split_msg[0],
            msg: split_msg[1],
            id: id
        };
        setId(id + 1);
        let newList = list;
        newList.push(Message);
        setList(newList);
    }

    return (
        <div className="App">
            <div id="Phone">
                <div id="PhoneScreen">
                    <TopMenu/>
                    <ChatLogo club="Club_0"/>
                    <ClubName club="Club_0"/>
                    <div class="Messenger">
                        <Messages items={list}/>
                    </div>
                    <Chat handleMessage={handleMessage}/>
                    <BottomMenu/>
                </div>
            </div>
        </div>
    );
}

export default App;