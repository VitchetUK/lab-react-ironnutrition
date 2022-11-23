import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// Iteration 4
const AddFoodForm = ({ setFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    setFood((currentState) => {
      const copy = [...currentState];
      copy.unshift({ name, image, calories, servings });
      return copy;
    });
  };

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };
  const handleImageChange = ({ target: { value } }) => {
    setImage(value);
  };
  const handleCaloriesChange = ({ target: { value } }) => {
    setCalories(value);
  };
  const handleServingsChange = ({ target: { value } }) => {
    setServings(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsChange} />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
