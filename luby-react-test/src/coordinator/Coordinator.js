export const goBack = (history) =>{
    history.goBack()
}

export const goToLogin = (history) =>{
    history.push('/')
}

export const goToFirstProfile = (history, username) =>{
    history.push(`/first-profile/${username}`)
}

export const goToProfile = (history, username) =>{
    history.push(`/profile/${username}`)
}

export const goToListOfFollowers = (history, username) =>{
    history.push(`/followers/${username}`)
}

export const goToListOfFollowingUsers = (history, username) =>{
    history.push(`/following/${username}`)
}

export const goToReposList = (history, username) =>{
    history.push(`/repos/${username}`)
}