import { BASE_URL } from '../../../base url/BaseURL'
import axios from 'axios'

export const getFollowingUsersFromAPI = async (username) => {
    try {
        const followingUsers = await axios.get(`${BASE_URL}/users/${username}/following`)
        return followingUsers.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}