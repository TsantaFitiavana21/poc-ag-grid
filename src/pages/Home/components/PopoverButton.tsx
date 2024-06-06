import { useEffect, useRef, useState } from "react"

export const PopoverButton = ({selectAllRows}: PopoverButtonProps) => {
    const [showPopover, setShowPopover] = useState(false)

    const buttonRef = useRef<HTMLButtonElement>(null)
    const popoverRef = useRef<HTMLDivElement>(null)

    const togglePopover = () => {
        setShowPopover(!showPopover)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                !buttonRef.current?.contains(event.target as Node)
            ) {
                setShowPopover(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className="relative flex justify-center items-center ">
            <button
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md focus:outline-none"
                onClick={togglePopover}
                ref={buttonRef}
            >
                ...
            </button>
            {showPopover && (
                <div
                    className="absolute mt-2 bg-slate-100 shadow-lg rounded-md w-52 p-4 z-10"
                    style={{ top: "100%" }}
                    ref={popoverRef}
                >
                    <button onClick={selectAllRows} className="block w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-bold my-1">
                        Select
                    </button>
                    <button className="block w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-bold my-1">
                        Import
                    </button>
                </div>
            )}
        </div>
    )
}

interface PopoverButtonProps {
    selectAllRows: () => void
}