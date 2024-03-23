import React, { useState, useEffect } from 'react';
import '../App.css';

function Browse() {
    const [newReleases, setNewReleases] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/new-releases')
            .then(response => response.json())
            .then(data => setNewReleases(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Welcome to DEN!</h1>
            <p>Browse music.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {newReleases.map((release, index) => (
                    <div key={index} style={{ margin: '10px' }}> 
                        <img src={release.cover_art} alt={release.name} className="album-cover" />
                        <p className="album-details">{release.name}</p>
                        <p className="album-details" style={{ marginTop: '5px' }}>{release.artists.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Browse;