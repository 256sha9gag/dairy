import React from 'react';
import styles from "./Input.module.css"
function Input() {
    return (
        <>
            <input type="text" placeholder="Поиск" className={styles.headerInput}/>
        </>
    );
}

export default Input;
