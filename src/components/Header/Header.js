import React, { useState } from 'react';

const Header = (props) => {
    const {count, setCount} = props;
    return (
        <div>
            <h1>This is header: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increament</button>
        </div>
    );
};

export default Header;