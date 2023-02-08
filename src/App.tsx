import React from 'react'
import './styles/root.scss'
import {
    createBrowserRouter, RouterProvider,
} from 'react-router-dom'
import Main from './pages/Main'
import Layout from './components/Layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Main /></Layout>,
    },
])

function App() {
    return (
        <RouterProvider router={ router } />
    )
}

export default App
