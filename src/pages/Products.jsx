import React  from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
        <Outlet/>
      <h1>Products</h1>
        <ul>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Mac Book</li>
            <li>Iphones</li>
            <li>Shoes</li>
        </ul>
        <Link to='oldproducts'>Old Products</Link>
        <Link to='newproducts'>New Products</Link>
        
    </div>
    
  )
}

export default Products
