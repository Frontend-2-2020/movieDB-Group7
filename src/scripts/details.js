import Axios from 'axios';
import {detailsUrl, api_key} from './config';

export const detailDiv = document.getElementById("detail");


// Details page init.
export const details = (movieId) => {

    // Passing movie id to getDetails function.
    getDetails(movieId);
};

// Function to get details for a single movie.
const getDetails = (movieId) => {

    // Using axios to get json data from the movie database.
    Axios.get(detailsUrl + movieId + "?api_key=" + api_key)
        .then(function (response) {
        // handle success
        var data = response.data;
        
        //Passing the data to the render function
        renderDetails(data);
    })
}
// Function to render details for a single movie.
const renderDetails = (data) => {

    //Selectors for all html and inserting values.
    document.getElementById("jumbotron-img").setAttribute("src",`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`)
    document.getElementById("poster").setAttribute("src",`https://image.tmdb.org/t/p/w500/${data.poster_path}`)
    document.getElementById("title").innerHTML = data.title;
    document.getElementById("score").innerHTML = `Score: ${data.vote_average}`;
    document.getElementById("releaseDate").innerHTML = ` Release date: ${data.release_date}`;
    document.getElementById("overview_text").innerHTML = data.overview;

    const productionCompanyList =  document.getElementById("productionCompanies");

    // Looping over companies and adding them to html

    data.production_companies.forEach(company => {
        productionCompanyList.innerHTML += `<li class="list-group-item d-flex"> <img class="logo_company" src="https://image.tmdb.org/t/p/w500/${company.logo_path}" alt=""/> ${company.name}</li>`;
    });



}