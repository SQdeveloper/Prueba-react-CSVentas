import React from 'react';

const getGiphy = (query) => {
    const API_KEY = "zRpzUOL8K65NNEY0Ex07vNn9EC97BMh7";    

    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`).
    then(response => response.json()).
    then(data => data.data)
};

export default getGiphy;