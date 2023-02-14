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

const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainPage />,
    },
    {
        path: ROUTES.CHARACTER_PAGE,
        element: <CharacterPage />,
    },
    {
        path: ROUTES.LOCATION_PAGE,
        element: <LocationPage />,
    },
])

function App() {
    return (
        <Layout>
            <RouterProvider router={ router } />
        </Layout>
    )
}

export default App
