import React from "react";

function CreatureItem(props){
    return(
        <li key={props.id}>
          {props.name} is from {props.origin}
        </li>
    )
}

export default CreatureItem;