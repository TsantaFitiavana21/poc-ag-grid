import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Route"

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}

export default App
