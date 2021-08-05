import React, { useEffect, useState } from 'react'
import { MainContainer } from '../style/style'
import { ReposHeader } from '../components/ReposHeader'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { BASE_URL } from '../base url/BaseURL'
import { RepoCard } from '../components/RepoCard'
import { useSelector, useDispatch } from 'react-redux'
import { setRepos } from '../redux/actions/repos/setRepos'

export default function ReposPage() {
    const { username } = useParams()
    const logedUser = useSelector(state => state.logedUser)
    const repos = useSelector(state => state.repos)
    const dispatch = useDispatch()
    const history = useHistory()
    const [quantity, setQuantity] = useState(0)

    useProtectedPage(history, logedUser)
    useEffect(() => {
        getRepos()
    }, [])

    const getRepos = async () => {
        try {
            const repos = await axios.get(`${BASE_URL}/users/${username}/repos`)
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setQuantity(user.data.public_repos)
            dispatch(setRepos(repos.data))
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
            {repos && repos.map((repo) => {
                return <RepoCard
                    name={repo.name}
                    description={repo.description}
                    stargazers={repo.stargazers_count}
                />
            })}
        </MainContainer>
    )
}