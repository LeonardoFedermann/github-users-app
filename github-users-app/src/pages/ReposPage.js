import React, { useEffect, useState } from 'react'
import { MainContainer } from '../style/mainContainerStyle'
import { ReposHeader } from '../components/repos/ReposHeader'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { BASE_URL } from '../base url/BaseURL'
import { RepoCard } from '../components/repos/RepoCard'
import { useSelector, useDispatch } from 'react-redux'
import { getRepos } from '../redux/actions/getRepos'

export default function ReposPage() {
    const { username } = useParams()
    const logedUser = useSelector(state => state.logedUser)
    const repos = useSelector(state => state.repos)
    const dispatch = useDispatch()
    const history = useHistory()
    const [quantity, setQuantity] = useState(0)

    useProtectedPage(history, logedUser)
    useEffect(() => {
        document.title = `${username}'s repos`
        getUserRepos()
    }, [])

    const getUserRepos = async () => {
        try {
            dispatch(getRepos(username))
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setQuantity(user.data.public_repos)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            <ReposHeader
                publicRepos={quantity}
                username={username}
            />
            {repos && repos.map((repo, index) => {
                return <RepoCard
                    key={index}
                    name={repo.name}
                    description={repo.description}
                    stargazers={repo.stargazers_count}
                />
            })}
        </MainContainer>
    )
}