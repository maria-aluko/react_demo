import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import personsData from "../data/personsData.js";
import './SinglePage.css'

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const person = personsData.find((e) => e.id === parseInt(id));

  return (
    <div className="spList">
        <h3>Single Page for {person.firstName} </h3>
        <p>Name: {person.title} </p>
        <p>Age: {person.age} </p>
        <p>Animal: {person.animal} </p>
        <Button
          text="Back to List"
          onClick={() => navigate(-1)}
        />
    </div>
  )
}

export default SinglePage;