
/* export const getGifs = async( category ) => {
    
     const url = `https://api.giphy.com/v1/gifs/search?api_key=IXGvA3Pbb1VP6gyphyW3nlt3IPMHEEhr&q='${category}'&limit=10`;
     const resp = await fetch( url );
    
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=IXGvA3Pbb1VP6gyphyW3nlt3IPMHEEhr&q='${category}'&limit=20` ,{ 'mode': 'no-cors' });

    const { data } = await resp.json();

    const gifs = data.map(img => ({
      id : img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    
    console.log(gifs);
    return gifs; 
  } */
  

  import axios from 'axios';
 
  export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=IXGvA3Pbb1VP6gyphyW3nlt3IPMHEEhr&q='${category}'&limit=10`;
    const { data: resp } = await axios.get(url);
    const { data } = resp;
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
  
    return gifs;
  };