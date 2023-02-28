import React from 'react'
import { Card } from './Card';


export const Cards = ({ products }) => {


  return (
    <div>
      {products && products.map(p => {
        return (
          <Card key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            category={p.category}
            description={p.description}
            image={p.image} />
        )
      })}
    </div>
  )
}
