import React from 'react';
import Songs from './Songs';


export default function (props) {

  console.log(props);

  const genre = props.genreName;
  const songs = props.songs
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;

  return (
    <div>
      <h3>{ genre } Station</h3>
      <Songs
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne}
      />
    </div>
  );
}
