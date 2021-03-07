import React, { useState } from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h1>This is header: {category}</h1>
            <button onClick={() => setCategory(category + 1)}>Increament</button>
        </div>
    );
};

export default Header;