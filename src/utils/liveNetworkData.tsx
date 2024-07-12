async function liveNetworkData() {
    try {
        const response = await fetch('https://data.vatsim.net/v3/vatsim-data.json');
        if (response.ok) {
            const data = await response.json();
            return data.controllers;
        } else {
            console.error('Error fetching data:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export default liveNetworkData;