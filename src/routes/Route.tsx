import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home/containers/Home"
import { Candidate } from "../pages/Home/pages/Candidate/containers/Candidate"
import { Jobs } from "../pages/Jobs/containers/Jobs"
import { CandidateGrid } from "../pages/Home/components/CandidateGrid"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <CandidateGrid />,
            },
            {
                path: "/jobs",
                element: <Jobs />,
            },
        ],
    },
    {
        path: "/candidate/:id",
        element: <Candidate />,
    },
])
