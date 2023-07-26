import { useState } from "react";
import { Button } from "antd";

function AddFoodForm({ onAddFood }) {
    const [foodData, setFoodData] = useState({
      name: "",
      calories: "",
      image: "",
      servings: "",
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFoodData({ ...foodData, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onAddFood(foodData);
      setFoodData({ name: "", calories: "", image: "", servings: "" });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={foodData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={foodData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={foodData.calories}
            onChange={handleChange}
            min="0"
          />
        </label>
        <label>
          Servings:
          <input
            type="number"
            name="servings"
            value={foodData.servings}
            onChange={handleChange}
            min="0"
          />
        </label>
        <Button type="primary" htmlType="submit">Create</Button>
      </form>
    );
  }
  
  export default AddFoodForm;