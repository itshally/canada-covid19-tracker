// getting the covid-19 summary cases around the canada
import axios from "axios";

export default async (req, res) => {

    const URL = `https://api.covid19tracker.ca/summary/split`
    const response = await axios.get(URL);

    res.status(200).json(response.data.data)
}