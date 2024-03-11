import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';

let data: Restaurant = {
  name: "yeolmok", 
  category: "", 
  address: {
    city: "seoul",
    detail: "somewhere", 
    zipCode: 123
  }, 
  menu: [{name: "fried", price: 15000, category: "chicken"}]
}

const App:React.FC = () => {
  const [restaurant, setRestaurent] = useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setRestaurent({...restaurant, address: address});
  }

  return (
    <div className="App">
      <Store info={restaurant} changeAddress={changeAddress}/>
    </div>
  );
}

export default App;
