import express from 'express';
import axios from 'axios';
import cors from 'cors';
const port = 3000;
const app = express();
app.use(cors());


const accessToken = 'BQCOizbCztVT_HXKuxYRBUJMt2D4rYaJ7ccSYVYtJcF_Cts9aBd93ovDX2FGRbhXCVNP1N3xlGmpoLOj66FxcfJ7mNs7vtn8S7NygJ9O0pO1CLeojrQ'; // Replace with your actual access token
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