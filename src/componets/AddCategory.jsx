
import React, { useState } from 'react'

const AddCategory = ({ onNewCategory /* setCategories */ }) => {
   
   const [ inputValue, setInputValue] = useState(''); 

   //console.log(category);

   const onInputChange = (event) => {
      //console.log(event.target.value);
      setInputValue( event.target.value );
   }

   const onSubmit = ( event ) => {
      //console.log(inputValue);
      event.preventDefault();

      
      if(inputValue.trim().length <= 1) return;   //lo que hacemos aqui es verificar que no tenga espacios y con eso comprobamos que tenga almenos 2 letras

      //setCategories( categories => [inputValue, ...categories]);
      onNewCategory( inputValue.trim() );
      setInputValue("");
   }

   return (
      <form onSubmit={ onSubmit }>
         <input 
            type='text'
            placeholder='Buscar Gif'
            value={ inputValue }
            onChange={ onInputChange }
         />         
      </form>
   )
}

export default AddCategory
