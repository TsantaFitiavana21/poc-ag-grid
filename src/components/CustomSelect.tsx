import { ChangeEvent } from "react"

export const CustomSelect = ({
    value,
    options,
    label,
    isEditing,
    onChange,
}: CustomSelectProps) => {
    return (
        <>
            {label && <div className="font-bold">{label}</div>}
            {!isEditing && <div>{value}</div>}

            {isEditing && (
                <select
                    value={value}
                    onChange={onChange}
                    className="border-2 text-black py-2 px-4 rounded-md"
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
        </>
    )
}

type CustomSelectProps = {
    value: string
    label: string
    isEditing: boolean
    options: { value: string; label: string }[]
    onChange?: (value: ChangeEvent<HTMLSelectElement>) => void
}
