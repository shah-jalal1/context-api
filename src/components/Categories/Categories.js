import React, { Children } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {name: 'Lenevo', category:'laptop'}, {name: 'Asus', category:'laptop'}, {name: 'Hp', category:'laptop'}, {name: 'Dell', category:'laptop'},{name: 'Samsung', category:'Mobile'}, {name: 'Nokia', category:'Mobile'}, {name: 'Apple', category:'Mobile'}, {name: 'Canon', category:'Camera'}, {name: 'Nikkon', category:'Camera'}, {name: 'Sony', category:'Camera'}
]

const Categories = (props) => {
    
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const matcheProduct = allProducts.filter(pd => pd.category === category && category.toLowerCase());
        setProducts(matcheProduct);
    }, [category]) // Dont understand
    return (
        <div>
            <h2>Select your category {category}</h2>
            {/* <CategoryDetail></CategoryDetail> */}
            {
                products.map(pd => <CategoryDetail product = {pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;