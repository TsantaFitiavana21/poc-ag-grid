import { Outlet } from "react-router"
import { SideMenu } from "../components/SideMenu"

export const Home = () => {
    return (
        <div className="h-screen flex">
            <SideMenu />
            <div className="flex-grow bg-gray-100 p-4">
                <Outlet />
            </div>
        </div>
    )
}
