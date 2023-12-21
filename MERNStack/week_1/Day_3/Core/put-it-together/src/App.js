import React, { useState } from 'react';

// PersonCard component with a birthday button to increase age
const PersonCard = (props) => {
  const { firstName, lastName, hairColor } = props;
  const [age, setAge] = useState(props.age);

  const handleAgeIncrement = () => {
    setAge(age + 1);
  };

  return (
    <div className="person-card">
      <h2>{firstName} {lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={handleAgeIncrement}>Birthday Button</button>
      <hr />
    </div>
  );
};

// Parent component App displaying PersonCard components
function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="John"
        lastName="Doe"
        age={30}
        hairColor="Brown"
      />
      {/* Add more PersonCard components with different props if needed */}
    </div>
  );
}

export default App;
