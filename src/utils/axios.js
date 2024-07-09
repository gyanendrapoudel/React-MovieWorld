import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY
const apiEP = `https://www.omdbapi.com/?apikey=${apiKey}&t=p`

const fetchAPI = async ()=>{
try {
    const response = await axios.get(apiEP)
} catch (error) {
    console.log(error.response)
}
}