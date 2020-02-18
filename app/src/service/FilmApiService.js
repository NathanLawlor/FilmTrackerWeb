import axios from 'axios';

const FILM_API_BASE_URL = 'http://localhost:8080/films';

class FilmApiService {

    fetchFilms() {
        return axios.get(FILM_API_BASE_URL);
    }
    
    fetchFilmsByFilters(page, search) { 	
        return axios.get(FILM_API_BASE_URL + '/search?search=' + search + '&page=' + page);
    }
    
    fetchFilmById(filmId) {
        return axios.get(FILM_API_BASE_URL + '/' + filmId);
    }

    deleteFilm(filmId) {
        return axios.delete(FILM_API_BASE_URL + '/' + filmId);
    }

    addFilm(film) {
        return axios.post(FILM_API_BASE_URL, film);
    }

    editFilm(film) {
        return axios.put(FILM_API_BASE_URL + '/' + film.id, film);
    }

}

export default new FilmApiService();