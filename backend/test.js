import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;

const accessToken = 'BQDHCbZwgT-FmV2SoXtlZGNiBaXkkz_-lEQJjm9gLXghiRQdvb7wQwIThOCb9MphKOmdWHvw5ETos0EmtLLnLLnmylnxxs1ZzE9PeCdVT8Dknwq5MoA'; // Replace with your actual access token
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