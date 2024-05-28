export const EditableField = ({
    isEditing,
    label,
    value,
    onChange,
}: EditableFieldProps) => {
    return (
        <>
            <div>
                {label && <div className="font-bold">{label}</div>}
                {!isEditing && <div>{value}</div>}
            </div>

            {isEditing && (
                <div>
                    <input
                        className="border-2 rounded-md py-2 px-4 focus:outline-none focus:border-blue-200"
                        placeholder={label || ""}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            )}
        </>
    )
}

type EditableFieldProps = {
    isEditing: boolean
    label?: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
