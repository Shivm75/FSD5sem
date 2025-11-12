import React from 'react'

const Product = ({product}) => {
    return (
        <div className="product">
            <img src={product.img} alt="product-img" />
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
        </div>
    )
}

export default Product