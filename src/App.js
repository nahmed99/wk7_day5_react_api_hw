import { useEffect, useState } from 'react';
import SurahSelector from './components/SurahSelector';
import Surah from './components/Surah';
import './App.css';

function App() {

  const [surahs, setSurahs] = useState([]);  // the fetched json of surahs
  const [selectedSurahNumber, setSelectedSurahNumber] = useState(1); // Set the surah selected by the user

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
  // Moved the fetchSurahs() method into the useEffect() to stop Chrome issuing
  // dependency warnings. App still worked, but I didn't like the warnings!
  useEffect(() => {

    const fetchSurahs = () => {
      const url = "http://api.alquran.cloud/v1/surah";
  
      fetch(url)  //return a promise
        .then((res) => res.json())  // return another promise
        .then((jsonData) => {
          setSurahs(jsonData.data);
        });

    };
  
    fetchSurahs();

  }, []);  //The [] as the second argument ensures that fetchSurahs is only involed once.

  // console.log(surahs);


  // Handle the user selection
  const handleUserSelected = number => {
    // console.log("This is the selected Surah number: ", number);
    setSelectedSurahNumber(number);
    // console.log("This is the selected *Surah*: ", selectedSurahNumber);
  }

  // Identify the surah that was selected by the user.
  console.log(selectedSurahNumber);
  const selectedSurah = surahs.find(surah => surah.number == selectedSurahNumber);
  console.log(selectedSurah);


  return (
    <>
      <h1>Fetching Surahs...</h1>
      <SurahSelector theSurahs={surahs} onSurahSelected={handleUserSelected} />
      <Surah selectedSurah={selectedSurah} />
    </>
  );
}

export default App;
