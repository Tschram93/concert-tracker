console.log('Extension Loaded');

async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a5172ea3ddmsh5f52f4d06f23d7cp1c1f6bjsn23fe1baca58e',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Detroit&minDate=2022-10-12&maxDate=2022-10-16&page=1', options);
    const record = await res.json();

    console.log('record', record);
};

fetchData();