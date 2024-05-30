import { CandidateIcon } from "../icons/CandidateIcon"
import { JobIcon } from "../icons/JobIcon"
import { SettingsIcon } from "../icons/SettingsIcon"

export const SideMenu = () => {
    return (
        <div className="w-64 bg-gray-800 text-white p-6">
            <ul>
                <li className="mb-6 hover:text-blue-300">
                    <a href="/" className="text-4xl font-bold ">
                        JobK
                    </a>
                </li>
                <li className="mb-4 flex items-center space-x-2 hover:text-blue-300">
                    <CandidateIcon />
                    <a href="/candidates" className="text-lg ">
                        Candidates
                    </a>
                </li>
                <li className="mb-4 flex items-center space-x-2 hover:text-blue-300">
                    <JobIcon />
                    <a href="/jobs" className="text-lg ">
                        Jobs
                    </a>
                </li>
                <li className="mb-4 flex items-center space-x-2 hover:text-blue-300">
                    <SettingsIcon />
                    <a href="/settings" className="text-lg ">
                        Settings
                    </a>
                </li>
            </ul>
        </div>
    )
}
