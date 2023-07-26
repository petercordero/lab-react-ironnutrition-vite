import { Button } from "antd";

function FoodBox({ food, onDelete }) {
  const { name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} style={{ height: 100, marginBottom: 10 }} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <Button danger onClick={onDelete}>Delete</Button>
    </div>
  );
}

export default FoodBox;