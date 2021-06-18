import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import FollowersPage from '../pages/FollowersPage'
import FollowingPage from '../pages/FollowingPage'
import ReposPage from '../pages/ReposPage'
import ErrorPage from '../pages/ErrorPage'

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path = "/">
                <LoginPage/>
            </Route>
            <Route exact path = "/profile/:username">
                <ProfilePage/>
            </Route>
            <Route exact path = "/followers">
                <FollowersPage/>
            </Route>
            <Route exact path = "/following">
                <FollowingPage/>
            </Route>
            <Route exact path = "/repos/:username">
                <ReposPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}