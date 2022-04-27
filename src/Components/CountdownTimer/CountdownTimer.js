import { useEffect, useState } from 'react';
import './CountdownTimer.css';

const defaultRemainingTime = 60
var remaining = defaultRemainingTime;

const CountdownTimer = () => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    useEffect(() => {
        const timer = setTimeout(() => {
            updateRemaingTime();
        }, 1000);
        return () => clearTimeout(timer);
    });

    function updateRemaingTime() {
        remaining -=1;
        if (remaining === -1) {
            remaining = defaultRemainingTime;
        }
        setRemainingTime(remaining);
    };

    return (
        <div className='countdown-timer'>
            <span>{remainingTime}</span>
            <span>seconds</span>
        </div>
    );
};

export default CountdownTimer;