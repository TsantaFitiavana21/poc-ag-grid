import { BackIcon } from "../icons/BackIcon"
import { EditIcon } from "../icons/EditIcon"

export const Header = ({
    title,
    isEditing,
    setIsEditing,
    navigate,
}: HeaderProps) => {
    return (
        <div className="flex justify-around items-center mb-4 fixed w-full m-0 top-0 bg-slate-100 h-10">
            <BackIcon
                onClick={() => navigate("/")}
                className="cursor-pointer"
            />
            <h1 className="text-2xl font-bold">{title}</h1>
            <EditIcon
                onClick={() => setIsEditing(!isEditing)}
                className="cursor-pointer"
            />
        </div>
    )
}

export interface HeaderProps {
    title: string
    isEditing: boolean
    setIsEditing: (isEditing: boolean) => void
    navigate: (path: string) => void
}
