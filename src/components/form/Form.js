import React, { useState } from "react";

function Form(props) {
  const [creatureName, setCreatureName] = useState("");
  const [creatureOrigin, setCreatureOrigin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (creatureName && creatureOrigin) {
      props.onNewCreatureData({ name: creatureName, origin: creatureOrigin });
    }else{
        alert('invalid input')
    }

    setCreatureName('');
    setCreatureOrigin('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        onChange={(event) => setCreatureName(event.target.value)}
        value={creatureName}
      />
      <label>Origin:</label>
      <input
        onChange={(event) => setCreatureOrigin(event.target.value)}
        value={creatureOrigin}
      />
      <button type="submit">Add New Creature</button>
    </form>
  );
}

export default Form;
