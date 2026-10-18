import React, {useState, useEffect} from 'react';
import Styles from './DigitalClock.module.css'

function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // This will update the time(date) object every 1000ms
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID); // Clears the interval after the component unmounts
        }
    }, []);

    function formatTime(){
    
        let hours = time.getHours(); 
        const minutes = time.getHours();
        const seconds = time.getSeconds();
        const amOrPm = hours / 12 < 0 ? "AM" : "PM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${amOrPm}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className={Styles.clockContainer}>
            <div className={Styles.clockDisplay}>
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock