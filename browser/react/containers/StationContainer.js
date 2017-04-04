import { connect } from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';


function mapStateToProps(state, ownProps) {
  console.log('ownProps ', ownProps);
  console.log('state', state);
  return {
    genreName: ownProps.params.genreName,
    songs: createStationsObj(state.songs)[ownProps.params.genreName].map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
  }

}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}


function createStationsObj(songs){

  let stationsObj = {};

  for(let i = 0; i < songs.length; i++ ){

    if(stationsObj[songs[i].genre]){
      stationsObj[songs[i].genre].push(songs[i]);
    }
    else {
      stationsObj[songs[i].genre] = [songs[i]];
    }

  }

  return stationsObj;

}


const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;
