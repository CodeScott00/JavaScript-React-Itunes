import React from 'react';

const MusicList = ({music, handleMusicSelected}) => {

    const musicListItems = music.map((song, index) => {
        return <li onClick={() => handleMusicSelected(song)}
        key={index}>{song['im:artist'].label}
        </li>
    })


    return(
            <div className='music-list'>
                <ul>{musicListItems}</ul>

            </div>

    )
}

export default MusicList;