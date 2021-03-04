import axios from "axios";

//displays province's data
export default async (req, res) => {
    const {query: { code }} = req

    const URL = `https://api.covid19tracker.ca/province/${code}`
    const response = await axios.get(URL)

    res.status(200).json(response.data)
}