import axios from "axios";

export default async (req, res) => {
    
    const URL = `https://api.covid19tracker.ca/provinces`
    const response = await axios.get(URL)

    res.status(200).json(response.data.slice(0, 13))
}