import React from 'react'

export const useFetchGifs = () => {
  
   const [images, setImages] = useState([]);
   const [isLoading, setIsloading] = useState(true);

   const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
   }
     
   useEffect( () => {
     getImages(); 
   }, [])
   
   return {
      images: [],
      isLoading: true
   }
}

export default useFetchGifs
