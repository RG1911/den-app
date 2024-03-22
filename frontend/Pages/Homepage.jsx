import React, { useState, useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';

function Homepage() {
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/album')
            .then(response => response.json())
            .then(data => setAlbum(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <Navbar />
            <h1>DEN</h1>
            <p>A social networking website for music lovers. </p>
            {album && (
                <div>
                    <img src={album.cover_art} alt={album.name} className="album-cover" />
                    <p>{album.name}</p>
                    <p>{album.artists}</p>
                </div>
            )}
        </div>
    );
}

export default Homepage;