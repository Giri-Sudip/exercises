

export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
};


export const youtube  = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
     
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBERAPID_API_KEY,
    }
  };



export const FetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();


    return data;

};