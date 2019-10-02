import Axios from 'axios';
import {overviewUrl, api_key} from './config';

export const overviewDiv = document.getElementById("overview");


// Overview page init.
export const overview = () => {
    getMovies(overviewUrl);
};

// Function get get movies.
const getMovies = (overviewUrl) => {

        //Using axios to get json data for all movies.
        Axios.get(overviewUrl + "&api_key=" + api_key)
        .then(function (response) {
        // handle success
        var data = response.data;
        
        //Passing the data to renderMovies function.
        renderMovies(data);
    })
}

// Function to render all movies.
const renderMovies = (data) => {
    //Selector to get movieDiv.
    const moviesDiv = document.getElementById('movies');

    moviesDiv.innerHTML = '';

    // Loop over data to render all movies.
   for(var i=0; i<data.results.length;i++){
    console.log(data.results[i].title);
    const movie = data.results[i];
    moviesDiv.innerHTML += `        
    <div class="col-lg-3 col-md-6 mt-4">        
        <div class="card" >
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text score">Score: ${movie.vote_average}</p>
                <p class="card-text score">Release Date: ${movie.release_date}</p>
                <a href="http://localhost:8081/?movie=${movie.id}" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>`; 
    }
}