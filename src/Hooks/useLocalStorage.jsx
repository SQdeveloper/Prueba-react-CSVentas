import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initalValue;
        }
        catch {
            return initialValue;
        }
    });

    const setValue = (value)=>{
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        catch(err) {
            console.log(err);
        }
    }

    return [storedValue, setValue];
};

export default useLocalStorage;