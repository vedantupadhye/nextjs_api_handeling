"use client"

import React from 'react'

export default function product({price}) {
   
  return (
    <div>
        <button onClick={()=> alert(price)}>click to check price</button>
    </div>
  )
}



