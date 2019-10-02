import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import queryString from "query-String";
import {details, detailDiv} from './details';
import {overview, overviewDiv} from './overview';


// Getting queryString
const parsed = queryString.parse(location.search);
console.log(parsed);


//Check if querystring movie exists, if it does go the details page. If not go to overview page.
if(parsed.movie){
    overviewDiv.style.display = "none";
    detailDiv.style.display = "block";
    details(parsed.movie);
}
else{
    overviewDiv.style.display = "block";
    detailDiv.style.display = "none";
    overview();
}






