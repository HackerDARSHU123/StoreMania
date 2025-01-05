import React, { useState, useEffect } from "react";

const ProductCard = ({ title, price, description, image, rating }) => {
  return (
    <div className="max-w-full rounded-lg shadow-lg overflow-hidden bg-slate-400 hover:scale-105 transition-all duration-200">
      <img src={image} alt={title} className="w-full h-64 object-cover bg-transparent border border-red-900" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description.slice(0,50)+"..."}</p>
        <div className="flex items-center mt-4">
          <span className="text-lg font-semibold text-white">${price}</span>
          <div className="ml-4 flex items-center">
            <span className="text-yellow-500">
              {"★".repeat(Math.floor(rating.rate))}
            </span>
            <span className="text-gray-400 ml-2">({rating.count})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchdata = async() =>{
        const data = await fetch("https://fakestoreapi.com/products");   
        const res = await data.json();
        setProducts(res);
        console.log(products)
    }
    fetchdata();
  }, []);


  return (
    <div className="grid w-full relative  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;