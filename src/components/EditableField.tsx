export const EditableField = ({
    isEditing,
    label,
    value,
    onChange,
}: EditableFieldProps) => {
    return (
        <div>
            <div>
                {label && <div className="text-sm text-slate-500 mb-2">{label}</div>}
                {!isEditing && <div className="text-lg">{value}</div>}
            </div>

            {isEditing && (
                <div>
                    <input
                        className="border-2 rounded-md py-2 px-4 focus:outline-none  focus:border-blue-200"
                        placeholder={label || ""}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            )}
        </div>
    )
}

type EditableFieldProps = {
    isEditing: boolean
    label?: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
