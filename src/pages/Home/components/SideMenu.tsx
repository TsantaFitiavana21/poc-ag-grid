export const SideMenu = () => {
    return (
        <div className="w-64 bg-gray-800 text-white p-6">
            <ul>
                <li className="mb-6">
                    <a href="#" className="text-4xl font-bold hover:underline">
                        JobK
                    </a>
                </li>
                <li className="mb-6">
                    <a href="#" className="text-lg hover:underline">
                        Dashboard
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-lg hover:underline">
                        Settings
                    </a>
                </li>
            </ul>
        </div>
    )
}
