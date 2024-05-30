import { useNavigate } from "react-router"
import { CandidateIcon } from "../icons/CandidateIcon"
import { JobIcon } from "../icons/JobIcon"
import { SettingsIcon } from "../icons/SettingsIcon"

export const SideMenu = () => {
    const navigate = useNavigate()

    return (
        <div className="w-64 bg-gray-800 text-white p-6">
            <div>
                <div className="mb-6 hover:text-blue-300">
                    <div
                        onClick={() => navigate("/")}
                        className="text-4xl font-bold "
                    >
                        JobK
                    </div>
                </div>
                <div className="mb-4 flex items-center space-x-2 hover:text-blue-300 cursor-pointer">
                    <CandidateIcon />
                    <div
                        onClick={() => navigate("/candidates")}
                        className="text-lg"
                    >
                        Candidates
                    </div>
                </div>
                <div className="mb-4 flex items-center space-x-2 hover:text-blue-300 cursor-pointer">
                    <JobIcon />
                    <div onClick={() => navigate("/jobs")} className="text-lg">
                        Jobs
                    </div>
                </div>
                <div className="mb-4 flex items-center space-x-2 hover:text-blue-300 cursor-pointer">
                    <SettingsIcon />
                    <div
                        onClick={() => navigate("/settings")}
                        className="text-lg"
                    >
                        Settings
                    </div>
                </div>
            </div>
        </div>
    )
}
