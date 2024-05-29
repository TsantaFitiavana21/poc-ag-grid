import { BackIcon } from "../icons/BackIcon"
import { EditIcon } from "../icons/EditIcon"

export const Header = ({
    title,
    isEditing,
    setIsEditing,
    handleBack,
}: HeaderProps) => {
    return (
        <div className="px-8 flex justify-between items-center mb-4 fixed w-full bg-slate-100 m-0 top-0 h-10">
            <h1 className="text-2xl font-bold">{title}</h1>

            <div className="flex gap-5">
                <BackIcon onClick={handleBack} className="cursor-pointer" />
                <EditIcon
                    onClick={() => setIsEditing(!isEditing)}
                    className="cursor-pointer"
                />
            </div>
        </div>
    )
}

export interface HeaderProps {
    title: string
    isEditing: boolean
    setIsEditing: (isEditing: boolean) => void
    handleBack: () => void
}
