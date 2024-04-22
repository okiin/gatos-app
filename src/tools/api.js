import axios from "axios";

const api = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {
        "x-api-key": 'live_nDXcgto1Fksgc2D2MUrVMvN4YAMzTT3haKBnKtYC4lDeBaJ3x5hzooNOcGi5WHD9',
        
    }
})

export default api;