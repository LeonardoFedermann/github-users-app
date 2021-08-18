import React, { useEffect } from 'react'
import { MainContainer } from '../style/mainContainerStyle'
import { ReposHeader } from '../components/repos/ReposHeader'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router-dom'
import { RepoCard } from '../components/repos/RepoCard'
import { useSelector, useDispatch } from 'react-redux'
import { getRepos } from '../redux/actions/getRepos'
import { getQuantityRepos } from '../redux/actions/getQuantityRepos'

export default function ReposPage() {
    const { username } = useParams()
    const logedUser = useSelector(state => state.logedUser)
    const repos = useSelector(state => state.repos)
    const quantity = useSelector(state => state.quantity)
    const dispatch = useDispatch()
    const history = useHistory()

    useProtectedPage(history, logedUser)
    useEffect(() => {
        document.title = `${username}'s repos`
        getUserRepos()
    }, [])

    const getUserRepos = async () => {
        dispatch(getRepos(username))
        dispatch(getQuantityRepos(username))
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