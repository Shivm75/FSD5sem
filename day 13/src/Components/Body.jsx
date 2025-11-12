import React, { useEffect, useState } from 'react'
import Product from './Product';
import Search from './Search';
const Body = () => {
    const [productsData, setProductsData] = useState([]);
    const [filteredProductData, setFilteredProductData] = useState([])
    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => {
                setProductsData(data);
                setFilteredProductData(data)
            })
            .catch((error) => console.log("unable to load data", error))
    }, [])
    const searchHandler = (query) => {
        const data = productsData.filter(
            (product) => product.title.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredProductData(data);
    }
    return (
        <div className="body">
            <Search searchHandler={searchHandler} />
            <div className="products" style={{ display: "flex", flexWrap: "wrap", gap: "35px" }}>
                {filteredProductData.map((product) => <Product product={product} />)}
            </div>
        </div>
    )
}

export default Body