import axios from 'axios'
import { BASE_URL } from '../../../base url/BaseURL'

export const getReposFromAPI = async (username) => {
    try {
        const repos = await axios.get(`${BASE_URL}/users/${username}/repos`)
        return repos.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}