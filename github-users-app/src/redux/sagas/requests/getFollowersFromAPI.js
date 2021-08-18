import { BASE_URL } from '../../../base url/BaseURL'
import axios from 'axios'

export const getFollowersFromAPI = async (username) => {
    try {
        const followers = await axios.get(`${BASE_URL}/users/${username}/followers`)
        return followers.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}