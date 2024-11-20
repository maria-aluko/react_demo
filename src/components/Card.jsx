import "./Card.css"
import { useState } from "react";
import Button from "./Button.jsx";

function Card({ firstName, title, age, animal }) {
  const [animalValue, setAnimalValue] = useState(animal);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);
  const handleChange = (e) => setAnimalValue(e.target.value);

  return (
    <div className="container">
      <div className="card">
        <p className="firstName">{firstName}</p>
        <p>Title: {title}</p>
        <p>Age: {age}</p>
        {isEditing ? (
          <input type="text" value={animalValue} onChange={handleChange} />
        ) : (
          <p>Animal: {animalValue}</p>
        )}
        <Button onClick={toggleEdit} text={isEditing ? "Save" : "Edit"} />
      </div>
    </div>
  );
}

export default Card;