import { connect } from 'react-redux';
import Stations from '../components/Stations';
import Station from '../components/Station';


function mapStateToProps(state) {
	return {
		stations: createStationsObj(state.songs)
	}
}

function mapDispatchToProps(dispatch) {
	return {}
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


const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;
