import React from 'react';
import { useContext } from 'react'; // Note: This Can be wrong. so make it by manual
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h4>This is CategoryDetail has: {category}</h4>
            <h6>Selected Category: {category}</h6>
        </div>
    );
};

export default CategoryDetail;