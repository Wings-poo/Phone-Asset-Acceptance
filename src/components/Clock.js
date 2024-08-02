function Clock (props)
{
    let time = props.timeStart.split(':');
    let hour = parseFloat(time[0]);
    let minutes = parseFloat(time[1]);
    let seconds = parseFloat(time[2]);

    let addltime = props.timeElapsed.split(':');
    let addlhour = parseFloat(addltime[0]);
    let addlminutes = parseFloat(addltime[1]);
    let addlseconds = parseFloat(addltime[2]);    

    let timeNow = new Date();
    timeNow.setHours(hour + addlhour);
    timeNow.setMinutes(minutes + addlminutes);
    timeNow.setSeconds(seconds + addlseconds);
    
    return (
        <div className="time">
            {timeNow.getHours().toString().padStart(2, '0')}:{timeNow.getMinutes().toString().padStart(2, '0')}:{timeNow.getSeconds().toString().padStart(2, '0')}
        </div>
    );
}

export default Clock