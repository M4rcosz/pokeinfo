import axios from "axios";

const http = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
})

export default http