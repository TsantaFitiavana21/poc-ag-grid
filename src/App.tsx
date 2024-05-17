import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./App.css"
import { Grid } from "./components/Grid"
import { SideMenu } from "./components/SideMenu"

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <div className="h-screen flex">
                <SideMenu />
                <div className="flex-grow bg-gray-100 p-4">
                    <Grid />
                </div>
            </div>
        </QueryClientProvider>
    )
}

export default App
