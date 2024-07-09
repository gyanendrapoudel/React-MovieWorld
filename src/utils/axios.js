import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY
const apiEP = `https://www.omdbapi.com/?apikey=${apiKey}&`

export const fetchAPI = async (str)=>{
    const url = apiEP+"t="+str
try {
    const response = await axios.get(url)
    return response.data
} catch (error) {
    console.log(error.response)
}
}