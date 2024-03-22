import express from 'express';
import axios from 'axios';
import cors from 'cors';
const port = 3000;
const app = express();
app.use(cors());


const accessToken = 'BQDxB5GGRy5e1kuFvaLhQbieaHZ-JiLlF4hrk0F_DyTcSVCmAZC9biQP9HorIN5g5UPVRupNJRotZpt0ndqQWWmG-QOtCOHK05WeLyScFV-PSwswhZs'; // Replace with your actual access token
const albumId = '4UVERYsIzs6xbDYO8srlqd'; // Replace with the actual album ID

app.get('/album', (req, res) => {
    axios({
      method: 'get',
      url: `https://api.spotify.com/v1/albums/${albumId}`,
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      const albumData = response.data;
      const formattedData = {
        name: albumData.name,
        artists: albumData.artists.map(artist => artist.name),
        release_date: albumData.release_date,
        tracks: albumData.tracks.items.map(track => track.name),
        cover_art: albumData.images[0].url // Add this line
      };
      res.send(formattedData);
    })
    .catch(error => {
      res.status(500).send(error.toString());
    });
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});