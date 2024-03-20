import axios from 'axios';
import qs from 'qs';

const clientId = '67c2fdb01aa44023ac131087069162f0';
const clientSecret = '394c8b5e1cc243aea3f1019b013ff2a7';

const encodedData = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

axios({
  method: 'post',
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${encodedData}`
  },
  data: qs.stringify({
    'grant_type': 'client_credentials'
  })
})
.then(response => {
  const accessToken = response.data.access_token;
  console.log(accessToken); // Log the access token to the console
})
.catch(error => {
  console.error(error);
});