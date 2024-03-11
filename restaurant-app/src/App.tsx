import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

let data: Restaurant = {
  name: "yeolmokRestaurant", 
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

  const showBestMenu = (name: string) => {
    console.log(name);
  }

  return (
    <div className="App">
      <Store info={restaurant} changeAddress={changeAddress}/>
      <BestMenu name="ramen" category="noodle" showBestMenu={showBestMenu}/>
    </div>
  );
}

export default App;
