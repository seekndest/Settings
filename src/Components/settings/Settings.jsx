import { useState, useEffect } from "react";
import styles from './Settings.module.css'

function Settings() {
    const [isDark, setIsDark] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const theme = localStorage.getItem("theme");
    useEffect(() => {
        localStorage.setItem("theme", isDark);
    }, [isDark])
    useEffect(() => {
        if (theme == "true") {
            setIsDark(true);
        }
    }, [])
    useEffect(() => {
        if (timeLeft <= 0) return;

        const timerId = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId);
    }, [])
    return (
        <div className={isDark ? styles.panelDark : styles.panelLight}>
            <h3>Настройки витрины</h3>
            <button onClick={() => {setIsDark(!isDark)}}>Сменить тему</button>
            <div>
                <p>Акция закончится через: {timeLeft} секунд</p>
            </div>
        </div>
    )

}
export default Settings;