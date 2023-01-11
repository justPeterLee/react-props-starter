import {useEffect, useState} from 'react';
import axios from 'axios';

import Form from '../form/Form';
import List from '../list/List';

import './App.css';

function App () {
 
  const [creatureList, setCreatureList] = useState([]);


  // Function to get the creatures from the server/database
  const fetchCreatures = () => {
    axios({
      method: 'GET',
      url: '/creature'
    })
      .then( (response) => {
        console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        setCreatureList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  // Function to add a new creature to the database
  const addCreature = (creature) =>{
    axios({
      method: 'POST',
      url: '/creature',
      data: creature
    })
      .then( (response) => {
        console.log('Response:', response);
        fetchCreatures();
      })
      .catch(function (error) {
        console.log('Error on add:', error);
      });
  }

  // Call function so it runs once on component load
  // Similar to jQuery's document ready
  useEffect( () => {
    fetchCreatures();
  }, [])
  
  return (
    <div className="App">
      <h2>Add Creature</h2>
      <Form onNewCreatureData={addCreature}/>
      
      <h2>All Creatures</h2>
      <List creatureData={creatureList} />
    </div>
  );

}

export default App
