import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;

const accessToken = 'BQDOUIAiDPIHdwYiara9CeCT2_wXZ4K9wwZJrxhyKyAOH2dNvPlENz303g4rnwo8xrYFytMwmrPOGHdDGJC5ER7ypztocF2Vj-3oQAJ5AT9TZkxTfr8'; // Replace with your actual access token
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
        tracks: albumData.tracks.items.map(track => track.name)
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