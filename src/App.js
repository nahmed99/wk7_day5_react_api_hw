import { useState } from 'react';
import './App.css';

function App() {

  const [surahs, setSurahs] = useState([])

  const fetchSurahs = () => {
    const url = "http://api.alquran.cloud/v1/surah";

    fetch(url)  //return a promise
      .then((res) => res.json())  // return another promise
      .then((jsonData) => {
        setSurahs(jsonData);
      });

      console.log(surahs);
  };


  return (
    <>
      <h1>This is the main page!</h1>
    </>
  );
}

export default App;
