import { Card, Col, Button } from 'antd';

// Iteration 2
const FoodBox = ({ food, removeFood }) => {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => removeFood(food.name)}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
