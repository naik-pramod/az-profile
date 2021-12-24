import axios from 'axios'

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "393859f483d82cbbc7032c6623005a7b"

export const fetachWeather = async (query)=>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        
        }
    });

    return data;
}