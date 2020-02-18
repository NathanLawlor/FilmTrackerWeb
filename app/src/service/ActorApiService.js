import axios from 'axios';

const FILM_API_BASE_URL = 'http://localhost:8080/actors';

class ActorApiService {

    fetchActors() {
        return axios.get(FILM_API_BASE_URL);
    }
    
    fetchActorOptionsBySearch(search) {
        return axios.get(FILM_API_BASE_URL + '/search?search=' + search);
    }
    
    fetchActorById(actorId) {
        return axios.get(FILM_API_BASE_URL + '/' + actorId);
    }

}

export default new ActorApiService();