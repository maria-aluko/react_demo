import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";

const List = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() = {}, []);

  useEffect(() => {
    fetch("http://localhost:3001/persons")
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
      setIsLoading(false);
    })
  }, []);

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };
  
  return (
    <div>
      <main>
          <>
            <h2>Employees</h2>
            <div className="list">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                posts.map((person) => (
                  <Card
                    key={person.id}
                    firstName={person.firstName}
                    title={person.title}
                    age={person.age}
                    animal={person.animal}
                    onClick={() => handleNavigate(person.id)}
                  />
                ))
              )}
            </div>
          </>
        </main>
      </div>
  );
};

export default List;