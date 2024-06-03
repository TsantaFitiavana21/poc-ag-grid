import { useEffect, useState } from "react"

export const Settings = () => {
    const [value, setValue] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
        localStorage.setItem("key", value)
    }

    useEffect(() => {
        const key = localStorage.getItem("key")
        if (key) {
            setValue(key)
        }
    }, [])

    return (
        <div className="p-2">
            <label className="text-lg text-slate-500 mb-2">
                Insert your Key
            </label>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="border-2 rounded-md py-2 px-4 focus:outline-none w-full  focus:border-blue-200"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}
