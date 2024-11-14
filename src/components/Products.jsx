import React, { useState, useEffect } from 'react'

import { FiFilter } from "react-icons/fi";
import ProductCard from './ProductCard';

const Products = () => {
  
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("/products.json");
            const productData = await response.json();
            setProducts(productData);
            setFilteredItems(productData);
        } catch (error) {
            console.log("Error fetching Products: ", error)            
        }
    }
    fetchData();
  }, []);

    //   filtering products
    const filterItems = (category) => {
        const filtered = category === "all" ? (products) : products.filter((item) => item.category === category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
    }

    // Show all products
    const showAll = () => {
        setFilteredItems(products);
        setSelectedCategory("all");
    }

    // Sorting Function Filter
    const handleSortChange = (option) => {
        setSortOption(option);

        let sortedItems = [...filteredItems];
        switch(option) {
            case "A-Z": sortedItems.sort((a,b) => a.title.localeCompare(b.title));
                break;
            
            case "Z-A" : sortedItems.sort((a,b) => b.title.localeCompare(a.title));
                break;

            
            case "low-high" : sortedItems.sort((a,b) => a.price - b.price);
                break;  

            case "high-low" : sortedItems.sort((a,b) => b.price - a.price);
                break; 
            
            default: 
                break;
        }
        setFilteredItems(sortedItems);
    }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
        <h2 className='title'>Subscribe to the Newsletter</h2>

        {/* Product Cards */}

        <div>
            <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
                <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                    <button onClick={showAll}>All Products</button>
                    <button onClick={() => (filterItems("Dress"))}>Clothing</button>
                    <button onClick={() => (filterItems("Hoodies"))}>Hoodies</button>
                    <button onClick={() => (filterItems("Bag"))}>Bags</button>
                </div>

                {/* Sorting Option */}

                <div className='flex justify-end mb-4'>
                    <div className='bg-dark px-2 py-2'>
                        <FiFilter className='text-white h-5 w-5' />
                    </div>
                    <select id='sort'
                     onChange={(e) => handleSortChange(e.target.value)}
                     value={sortOption} 
                     className='bg-dark text-white px-2 py-1 outline-none'>
                        <option value="default">Default</option>
                        <option value="A-Z">A - Z</option>
                        <option value="Z-A">Z - A</option>
                        <option value="low-high">Low - High</option>
                        <option value="high-low">High - Low</option>
                    </select>
                </div>
            </div>

            <ProductCard productsData={filteredItems} />
        </div>
    </div>
  )
}

export default Products