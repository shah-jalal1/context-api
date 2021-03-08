import React from 'react';
import { useContext } from 'react'; // Note: This Can be wrong. so make it by manual
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h4>This is CategoryDetail has: </h4>
            <h6>Selected Category: {name}</h6>
        </div>
    );
};

export default CategoryDetail;