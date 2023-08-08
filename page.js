import React from 'react'
import Product from './Product';

async function productlist(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}

 async function page () {
    let products = await productlist();

  return (
    <main>
    <h1>Product List</h1>
    {
        products.map((item)=>(
        <div>
            <h3> Name :{item.title}</h3>
            <Product price={item.price} />
        </div>
        ))
    }
    </main>
  )
}

export default page