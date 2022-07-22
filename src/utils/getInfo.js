import axios from "axios";

const apiKey = '55pfqfICInZxq5irZ49ekgvZO8F8l3TFaueoJUNB'
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

export const getInfo = async (query = '2020-06-20') => {
    return await axios.get(`${url}&date=${query}`)
}
