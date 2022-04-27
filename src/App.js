import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import LastUsersList from './Components/LastUsersList/LastUsersList';
import { getColorByRemainingTime, getNextRemainingTime } from './Utils';
import { useButtonClicked, useColorAssigned } from './useLocalStorage';
import { BLUE, GREEN, GREY, ORANGE, PURPLE, RED, WHITE, YELLOW } from './Colors.js';
import { CountClicks } from './Components/CountClicks/CountClicks';
import './App.css';

var nextRemainingTime = 0;

const renderTime = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

function App() {

    const [key, setKey] = useState(0);
    const [color, setColor] = useColorAssigned();
    const [colorNewUser, setColorNewUser] = useState(WHITE);
    const [clicked, setClicked] = useButtonClicked();
    const [remainingTime, setRemainingTime] = useState();

    useEffect(() => {
      setNextRemainingTime()
      setColorNewUser(WHITE)
    }, []);
    
    const resetTime = () => {
      setKey(prevKey => prevKey + 1)
    };

    const handleClick = () => {
      resetTime();
      setColorByTime(true)
      setClicked(true);
    };

    const setColorByTime = (localUser) => {
      const selectedColor = getColorByRemainingTime(remainingTime);
      if (localUser) {
        setColor(selectedColor) // Paint whatever object with 'color' for this user
        setColorNewUser(selectedColor)
      } else {
        setColorNewUser(selectedColor)
      }
    };

    const setNextRemainingTime = () => {
      nextRemainingTime = getNextRemainingTime();
    };

    return (
      <div className = "App" >
        <h1>
          The Button
        </h1>
      
      <div className='main-container'>
        <LastUsersList newUserColor={colorNewUser}/>
        <div className='container' style={{
          boxShadow: `1px 4px 50px 12px ${color}`
        }}>
          <div className="timer-wrapper">
            <CountdownCircleTimer
              key={key}
              isPlaying
              duration={60}
              isSmoothColorTransition={false}
              colors={[PURPLE, BLUE, GREEN, YELLOW, ORANGE, RED, GREY]}
              colorsTime={[60, 51, 41, 31, 21, 11, 0]}
              onComplete={() => ({ shouldRepeat: true, delay: 1 })}
              onUpdate={(remaining) => {
                setRemainingTime(remaining)
                if (remainingTime === nextRemainingTime) {
                  setColorByTime(false)
                  resetTime();
                  setNextRemainingTime();
                }
              }}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
          <div className="button-wrapper">
            <Button variant="outlined" disabled={clicked} onClick={ handleClick }>
              PRESS HERE
            </Button>
          </div>
        </div>
        <CountClicks color={colorNewUser} />
      </div>
      </div>
    );
};

export default App;