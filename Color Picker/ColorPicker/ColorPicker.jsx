import React, {useState} from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <div className={styles.color_picker_container}>
            <h1 className={styles.title}>Color Picker</h1>
            <div className={styles.color_display} style={{backgroundColor: color}}>
                <p className={styles.discription}>Selected Color: {color}</p>
            </div>
            
            <label className={styles.title2}>Select A Color</label>
            <input className={styles.chooser} type="color" value={color} onChange={handleColorChange} />
        
        </div>
    );
}

export default ColorPicker;