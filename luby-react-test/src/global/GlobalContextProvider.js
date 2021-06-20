import { useState } from 'react'
import { GlobalContext } from './GlobalContext'

export const GlobalContextProvider = (props) => {
    const [logedUser, setLogedUser] = useState({})
    const [repos, setRepos] = useState([])
    const [followers, setFollowers] = useState([])
    const [followingUsers, setFollowingUsers] = useState([])

    const data = {
        logedUser,
        repos,
        followers,
        followingUsers,
        setLogedUser,
        setRepos,
        setFollowers,
        setFollowingUsers
    }
    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}