import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import SearchBar from "./SearchBar";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDeleteFood = (name) => {
    const updatedFoods = foods.filter((food) => food.name !== name);
    setFoods(updatedFoods);
  };

  const handleAddFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  const handleSearch = (searchTerm) => {
    const filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoods(filteredFoods);
};

  return (
    <div>
        <h1>LAB | React IronNutrition</h1>
      <AddFoodForm onAddFood={handleAddFood} />
      <SearchBar onSearch={handleSearch} />

      {foods.length === 0 ? (
        <p>Oops! There is no more content to show.</p>
      ) : (
        foods.map((food) => (
          <FoodBox
            key={food.name}
            food={food}
            onDelete={() => handleDeleteFood(food.name)}
          />
        ))
      )}
    </div>
  );
}

export default FoodList;