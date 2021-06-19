import {useState} from 'react'
import {GlobalContext} from './GlobalContext'

export const GlobalContextProvider = (props) =>{
    const [shownUser, setShownUser] = useState({})
    const [repos, setRepos] = useState([])
    const [followers, setFollowers] = useState([])
    const [followingUsers, setFollowingUsers] = useState([])

    const data = {
        shownUser,
        repos,
        followers,
        followingUsers, 
        setShownUser,
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