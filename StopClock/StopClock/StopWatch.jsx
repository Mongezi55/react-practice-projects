
import {useState, useEffect, useRef} from 'react';
import styles from "./StopWatch.module.css"

function StopWatch(){

    const [isRunning, setIsRunning] = useState(false); // initially not running
    const [elapsedTime, setElapsedTime] = useState(0);  // inital elapsed time in miliseconds
    let startTimeRef = useRef(0);
    let intervalIDRef = useRef(null);

    // This effect will run when component mounts and when the 'isRunning' stateful variable changes
    useEffect(() =>{
        if(isRunning){    
            // interval will run every 10 miliseconds
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        // clean-up code
        return () => {
            clearInterval(intervalIDRef.current);
        }
    }
    , [isRunning]);

    function formatTime(){

        //let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60); // When minutes reach 60, they will go back to zero
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor((elapsedTime % 1000) / 10);

        // To add zeropadding to numbers convert to string and use padStart string method

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        miliseconds = String(miliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${miliseconds}`;
    }

    function start(){
        setIsRunning(true); // Start the timer
        startTimeRef.current = Date.now() - elapsedTime; // This will give the current date in milliseconds since the epic 1970
    }
    function stop(){
        setIsRunning(false);

    }
    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }

    return(
        <div className={styles.stopwatch_container}>
            <div className={styles.display}>
                {formatTime()}
            </div>
            <div className={styles.controls}>
                <button className={styles.c_button} onClick={start}>Start</button>
                <button className={styles.c_button} onClick={stop}>Stop</button>
                <button className={styles.c_button} onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch