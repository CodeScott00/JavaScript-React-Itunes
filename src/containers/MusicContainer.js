import React, { useEffect, useState } from 'react';
import MusicList from '../components/MusicList';
import MusicDetail from '../components/MusicDetail';

const MusicContainer = () => {
    
    const [music, setMusic] = useState([])
    const [selectedMusic ,setSelectedMusic] = useState(null)

    const getMusic = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then((response) => response.json())
        .then((data) => setMusic(data.feed.entry))
    }

    useEffect(() => {
        getMusic()
    }, []);

    const handleMusicSelected = (song) => {
        setSelectedMusic(song)
    }



    return(
        <div className='music-container'>
            <MusicList music={music} handleMusicSelected={handleMusicSelected}/>
            <MusicDetail song={selectedMusic}/>
        </div>

        
    )
}

export default MusicContainer;
