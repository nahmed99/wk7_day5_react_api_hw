

const Surah = ({ selectedSurah }) => {

    // Don't render unless 'selectedSurah' actually contains data...
    if (!selectedSurah) {
        return null;
    }

    console.log(selectedSurah);

    return (
        <p> {selectedSurah.name} {selectedSurah.englishName}</p>
    );
}

export default Surah;