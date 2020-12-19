
const SurahSelector = ({ theSurahs, onSurahSelected }) => {


    // Don't render unless 'theSurahs' actually contains data...
    if (!theSurahs) {
        return null;
    }

    // Handle the selection made by the user
    const handleChange = event => {

        // console.log(event.target.value);

        onSurahSelected(event.target.value); // this is a callback function in App.js.
        
    }


    return (
        <div className="surah-selector-container">
            <select className="surah-selector" defaultValue="" onChange={handleChange}>
                <option value="" disabled>Select Surah</option>
                {theSurahs.map(surah => {
                    return <option  key={surah.number} value={surah.number}>{surah.number}. {surah.name} ({surah.englishName})</option>
                })}
            </select>
        </div>
    );
}

export default SurahSelector;