import { useEffect, useState } from "react";
import { WHITE } from './Colors.js';

function getStorageValue(key, defaultValue) {
    // getting stored value
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem(key);
        const initial = saved !== null ? JSON.parse(saved) : defaultValue;
        return initial;
    }
};

export const useColorAssigned = () => {
    const COLOR_ASSIGNED = "COLOR_ASSIGNED";
    const defaultColor = WHITE;
    const [value, setValue] = useState(() => {
        return getStorageValue(COLOR_ASSIGNED, defaultColor);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(COLOR_ASSIGNED, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export const useButtonClicked = () => {
    const BUTTON_CLICKED = "BUTTON_CLICKED";
    const [value, setValue] = useState(() => {
        return getStorageValue(BUTTON_CLICKED, false);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(BUTTON_CLICKED, JSON.stringify(value));
    }, [BUTTON_CLICKED, value]);

    return [value, setValue];
};