import axios from 'axios'


const http = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',

heades: {
    "Content-type": "application/json"
}


  });


 export default http