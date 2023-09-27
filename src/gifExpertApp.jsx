
import React, { useState } from 'react'
import AddCategory from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

export const GifExpertApp = () => {

   const [categories ,setCategories] = useState( ['DeadPool'] )

   
   const onAddCategory = ( newCategory ) => {
      console.log(newCategory);

      if(categories.includes(newCategory)) return;  //aqui validamos si la nueva categoria ya existe en categories, de ser asi no deja insertarla, esto debido aque debe existir solo una key de cada elemento

      setCategories([ newCategory, ...categories]);
      //setCategories(['DeadPool', ...categories]);
      //setCategories( categories => [...categories, 'DeadPool']);   //otra forma de agregar otro registro
   }

   return (
      <>
         <h1>GifExpertApp</h1>

      <AddCategory 
         //setCategories ={ setCategories }
         onNewCategory = { onAddCategory }
      />

      { categories.map( (category) => (
            <GifGrid 
               key={ category } 
               category={ category } />
         ))
      }
      </>
   )
}

