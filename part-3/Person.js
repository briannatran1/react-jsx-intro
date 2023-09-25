function Person({ name, age, hobbies }) {
  return (
    <div>
      <p>Learn some information about this person:</p>
      <p>Name: {name.length > 8 ? name.slice(0, 6) : name}</p>
      <p>Age: {age}</p>
      {age > 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}

      <ul>
        {hobbies.map(h => <li>{h}</li>)}
      </ul>


    </div>
  );
}
