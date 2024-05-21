import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home/containers/Home"
import { Candidate } from "../pages/Home/pages/Candidate/containers/Candidate"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/candidate/:id",
        element: <Candidate />
    }
])
