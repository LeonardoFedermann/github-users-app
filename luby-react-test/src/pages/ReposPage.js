import React, { useEffect, useState } from 'react'
import { MainContainer } from '../style/style'
import { ReposHeader } from '../components/ReposHeader'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from '../global/GlobalContext'
import { useHistory, useParams } from 'react-router-dom'
import { BASE_URL } from '../base url/BaseURL'
import { RepoCard } from '../components/RepoCard'

export default function ReposPage() {
    const { repos, setRepos } = useContext(GlobalContext)
    const { username } = useParams()
    const history = useHistory()
    const [quantity, setQuantity] = useState(0)

    useProtectedPage(history)
    useEffect(() => {
        getRepos()
    }, [])

    const getRepos = async () => {
        try {
            const repos = await axios.get(`${BASE_URL}/users/${username}/repos`)
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setQuantity(user.data.public_repos)
            setRepos(repos.data)
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