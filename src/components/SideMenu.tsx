import { CandidateIcon } from "../icons/CandidateIcon"
import { JobIcon } from "../icons/JobIcon"
import { SettingsIcon } from "../icons/SettingsIcon"

export const SideMenu = () => {
    return (
        <div className="w-64 bg-gray-800 text-white p-6">
            <ul>
                <li className="mb-6">
                    <a href="/" className="text-4xl font-bold hover:underline">
                        JobK
                    </a>
                </li>
                <li className="mb-4 flex items-center space-x-2">
                    <CandidateIcon />
                    <a href="/" className="text-lg hover:underline">
                        Candidates
                    </a>
                </li>
                <li className="mb-4 flex items-center space-x-2">
                    <JobIcon />
                    <a href="/jobs" className="text-lg hover:underline">
                        Jobs
                    </a>
                </li>
                <li className="mb-4 flex items-center space-x-2">
                    <SettingsIcon />
                    <a href="/jobs" className="text-lg hover:underline">
                        Settings
                    </a>
                </li>
            </ul>
        </div>
    )
}
