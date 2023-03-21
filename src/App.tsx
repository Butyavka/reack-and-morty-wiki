import React from 'react'
import './styles/root.scss'
import {
    createBrowserRouter, RouterProvider,
} from 'react-router-dom'
import Layout from './components/Layout'
import { ROUTES } from './constants/routes'
import MainPage from './pages/MainPage'
import CharacterPage from './pages/CharacterPage'
import LocationPage from './pages/LocationPage'
import EpisodePage from './pages/EpisodePage'

const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <Layout><MainPage /></Layout>,
    },
    {
        path: ROUTES.CHARACTER_PAGE,
        element: <Layout><CharacterPage /></Layout>,
    },
    {
        path: ROUTES.LOCATION_PAGE,
        element: <Layout><LocationPage /></Layout>,
    },
    {
        path: ROUTES.EPISODE_PAGE,
        element: <Layout><EpisodePage /></Layout>,
    },
])

function App() {
    return (
        <RouterProvider router={ router } />
    )
}

export default App
