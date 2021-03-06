

const Surah = ({ selectedSurah }) => {

    // Don't render unless 'selectedSurah' actually contains data...
    if (!selectedSurah) {
        return null;
    }

    // console.log(selectedSurah);
    // console.log(typeof selectedSurah.number);

    return (
        <div className="surah-module">
            <h3 className="surah-heading">{selectedSurah.number}. {selectedSurah.name}</h3>
            <h4 className="surah-heading-en">{selectedSurah.englishName}</h4>
            <br />
            <p><b>Translated English Name:</b> {selectedSurah.englishNameTranslation}</p>
            <p><b>Number of Ayahs:</b> {selectedSurah.numberOfAyahs}</p>
            <p><b>Revelation:</b> {selectedSurah.revelationType}</p>

            
        </div>
    );
}

export default Surah;