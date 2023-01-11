import React from "react";
import CreatureItem from "../creature/CreatureItem";

function List({creatureData}) {
  return (
    <ul>
      {creatureData.map((creature) => (
        <CreatureItem
          key={creature.id}
          name={creature.name}
          origin={creature.origin}
        />
      ))}
    </ul>
  );
}

export default List;
