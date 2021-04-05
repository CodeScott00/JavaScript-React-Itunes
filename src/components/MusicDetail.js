import React from 'react';

const MusicDetail = ({song}) => {

    if(!song){
        return null
    }

    return(
        <>
        <div className='song-display'>
        <h1>{song['im:name'].label}</h1> 
        <h2>{song['im:artist'].label}</h2>
        <img src={song['im:image'][1].label}/>
        </div>
        </>

    )
}

export default MusicDetail;