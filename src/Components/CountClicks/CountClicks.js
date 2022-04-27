import React, { useEffect, useState } from 'react';
import { PURPLE, BLUE, GREEN, YELLOW, ORANGE, RED, GREY, WHITE } from '../../Colors';

export const CountClicks = ({color}) => {
 
    var listColors =  [{
        name: PURPLE,
        clicks:2523 ,
    },
    {
        name:BLUE,
        clicks:2145
    },
    {   name:GREEN,
        clicks:1563 
    },
    {   name:YELLOW,
        clicks:1267
    },
    {   name:ORANGE,
        clicks:1034
    },
    {     name:RED,
        clicks:981
    }];

    const [colors, setColors] = useState( listColors);

    useEffect(() => {
        if (color !== WHITE) {
           listColors.find((o, i) => {
               if (o.name === color) {
                   listColors[i] = {
                       name: color,
                       clicks: o.clicks + 1
                   }
               }
           });
            setColors(listColors);
        }
        return;
    }, [color]);
    
  return (
    <div className='clicks'>
        <div className='clicks-container'>
            <h4>Amount of clicks</h4>
            <ul>
            {
                colors.map(color => (
                    <li key={color.name} style={{color: color.name, fontWeight: 'bold'}}>{color.clicks}</li>
                ))
            }
            </ul>
        </div>
    </div>
  );
};
