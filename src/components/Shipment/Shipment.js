import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h1>This is Shipment</h1>
            <button onClick={() => setCategory(category + 1)}>Increament from category</button>
        </div>
    );
};

export default Shipment;