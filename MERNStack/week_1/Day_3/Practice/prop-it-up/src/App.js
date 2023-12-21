import React from 'react';


const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;

  return (
    <div className="person-card">
      <h2>{firstName} {lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <hr />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="John"
        lastName="Doe"
        age={30}
        hairColor="black"
      />
      <PersonCard
        firstName="Smith"
        lastName="John"
        age={88}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Fillmore"
        lastName="Millard"
        age={50}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Smith"
        lastName="Maria"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
}

export default App;
