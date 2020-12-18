import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [surahs, setSurahs] = useState([]);

  // const fetchSurahs = () => {
  //   const url = "http://api.alquran.cloud/v1/surah";

  //   fetch(url)  //return a promise
  //     .then((res) => res.json())  // return another promise
  //     .then((jsonData) => {
  //       setSurahs(jsonData);
  //     });

  //     console.log(surahs);
  // };


  // This useEffect() will load the data once, upon initial entry to the app.
  useEffect(() => {

    const fetchSurahs = () => {
      const url = "http://api.alquran.cloud/v1/surah";
  
      fetch(url)  //return a promise
        .then((res) => res.json())  // return another promise
        .then((jsonData) => {
          setSurahs(jsonData);
        });

    };
  
    fetchSurahs();
  }, []);  //The [] as the second argument ensures that fetchSurahs is only involed once.

  console.log(surahs);


  return (
    <>
      <h1>This is the main page!</h1>
    </>
  );
}

export default App;
