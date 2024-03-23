import express from 'express';
import axios from 'axios';
import cors from 'cors';

const port = 3000;
const app = express();
app.use(cors());

const accessToken = 'BQABxX-jb8_Jcl9vBelocQSfr05l0xuMBUtd_Gh0KynDWZz22kD9IAJbwQMBrNt0aUPCuTlxrHyxUS79GafMEnoEOMfPnZK54w1qGWHnbVWFIEiyb1E'; // Replace with your actual access token

app.get('/new-releases', (req, res) => {
    axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/browse/new-releases',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => {
        const newReleasesData = response.data.albums.items;
        const firstSixReleases = newReleasesData.slice(0, 6); // Get the first 6 items
        const formattedData = firstSixReleases.map(album => ({
            name: album.name,
            artists: album.artists.map(artist => artist.name),
            release_date: album.release_date,
            cover_art: album.images[0].url
        }));
        res.send(formattedData);
    })
    .catch(error => {
        res.status(500).send(error.toString());
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});