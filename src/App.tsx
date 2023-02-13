import React from 'react'
import './styles/root.scss'
import {
    createBrowserRouter, RouterProvider,
} from 'react-router-dom'
import Main from './pages/Main'
import Layout from './components/Layout'
import CharacterDetail from './pages/CharacterDetail'
import { ROUTES } from './constants/routes'

const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <Main />,
    },
    {
        path: ROUTES.CHARACTER_DETAIL,
        element: <CharacterDetail />,
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
