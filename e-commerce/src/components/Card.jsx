import React from 'react'


export const Card = ({id,title,price,category,description,image}) => {  
      
          return (
            <div key={id}>
              <div>
                <h2>titulo: {title}</h2>
                <h2>$ {price}</h2>
                <h2>Category: {category}</h2>
              </div>
              <p>{description}</p>
              <img src={image} alt={id} />
            </div>
          );
       
    
}
