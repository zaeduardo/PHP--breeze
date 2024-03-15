import axios from "axios";

export const apiC = axios.create ({
    baseURL: "https://viacep.com.br/ws/"
});
