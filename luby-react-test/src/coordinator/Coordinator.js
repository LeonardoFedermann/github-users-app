export const goBack = (history) =>{
    history.goBack()
}

export const goToLogin = (history) =>{
    history.push('/')
}

export const goToProfile = (history, username) =>{
    history.push(`/profile/${username}`)
}

export const goToListOfFollowers = (history) =>{
    history.push(`/followers`)
}

export const goToListOfFollowingUsers = (history) =>{
    history.push(`/following`)
}

export const goToReposList = (history, username) =>{
    history.push(`/repos/${username}`)
}