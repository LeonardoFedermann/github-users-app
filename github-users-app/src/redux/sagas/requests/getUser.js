import { BASE_URL } from '../../../base url/BaseURL'
import axios from 'axios'

export const getUser = async (username) => {
    try {
        const user = await axios.get(`${BASE_URL}/users/${username}`)
        return user.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}