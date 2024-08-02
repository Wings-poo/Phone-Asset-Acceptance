import React from 'react';
import Clock from './Clock';
import Images from './Images';

const Messages = (props) => {
    return (
        <div>
        {
            props.items.map((item) => {
                if (item.name === "Me")
                    return ( 
                    <div className="post" key={item.ud}>
                        <Images name={item.name}/>
                        <div className="messageme">
                            <h3>You</h3>
                            <Clock timeStart={item.timeStart} timeElapsed={item.timeElapsed}/>
                            <p>{item.msg}</p>
                        </div>
                    </div>
                    );

                else if (item.name === "None")
                    return (
                        <h4>{item.msg}</h4>
                    )
                    
                else
                    return (
                    <div className="post" key={item.id}>
                        <Images name={item.name}/>
                        <div className="message">
                            <h3>{item.name}</h3>
                            <Clock timeStart={item.timeStart} timeElapsed={item.timeElapsed}/>
                            <p>{item.msg}</p>
                        </div>
                    </div>
                    );
            })
        }
        </div>
    );
}

export default Messages