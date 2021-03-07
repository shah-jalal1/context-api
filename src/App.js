import { useState } from 'react';
import { createContext } from 'react/cjs/react.production.min';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
    {/* // <div> */}
      <p>Count Value: {category}</p>
        <Header></Header>
        <Home ></Home>
        <Shipment></Shipment>
      {/* // </div> */}
    </CategoryContext.Provider>
  );
}

export default App;
