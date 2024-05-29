import { ChangeEvent } from "react"

export const CustomSelect = ({
    value,
    options,
    label,
    isEditing,
    onChange,
}: CustomSelectProps) => {
    return (
        <div>
            <div>
                {label && (
                    <div className="text-sm text-slate-500 mb-2">{label}</div>
                )}
                
                {!isEditing && (
                    <div className="text-lg w-72 md:w-54">
                        {options.find(
                            (option) =>
                                option.value === value || option.label == value
                        )?.label || ""}
                    </div>
                )}
            </div>

            {isEditing && (
                <select
                    value={value}
                    onChange={onChange}
                    className="border-2 text-black py-2 px-4 rounded-md w-72 md:w-54"
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
        </div>
    )
}

type CustomSelectProps = {
    value: string
    label: string
    isEditing: boolean
    options: { value: string; label: string }[]
    onChange?: (value: ChangeEvent<HTMLSelectElement>) => void
}
