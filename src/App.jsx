import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import { Row, Divider, Button } from 'antd';

function App() {
  const [food, setFood] = useState(foods);
  const [searchString, setSearchString] = useState('');
  const showFood = food.filter((foods) => {
    return foods.name.includes(searchString);
  });
  console.log(searchString);

  const removeFood = (name) => {
    const remainingFood = food.filter((food) => food.name !== name);
    setFood(remainingFood);
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm setFood={setFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search searchString={searchString} setSearchString={setSearchString} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFood.map((food) => {
          return (
            <FoodBox
              removeFood={removeFood}
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            />
            //<div>
            //  <p>{oneFood.name}</p>
            //  <img src={oneFood.image} width={150} alt={oneFood.name} />
            //</div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
