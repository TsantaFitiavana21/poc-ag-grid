import { useNavigate, useParams } from "react-router"
import { useGetCandidateById } from "../../../../../queries/useGetCandidateById"
import {
    desired_missions,
    desired_structure,
    domainValues,
    experiences_years,
} from "../../../../../constants/datas"
import { mapExperiences } from "../../../../../utils"
import { CustomSelect } from "../../../../../components/CustomSelect"
import { EditableField } from "../../../../../components/EditableField"
import { useState } from "react"
import { Header } from "../../../../../components/Header"

export const Candidate = () => {
    const [isEditing, setIsEditing] = useState(false)

    const urlParams = useParams()
    const navigate = useNavigate()
    const { data, isLoading } = useGetCandidateById(urlParams.id as string)

    return (
        <div className="h-full">
            {isLoading && <p>Loading...</p>}

            {!isLoading && data && (
                <div>
                    <Header
                        isEditing={isEditing}
                        handleBack={() => navigate("/")}
                        setIsEditing={setIsEditing}
                        title={`${data.first_name} ${data.last_name}`}
                    />

                    <div className="mt-10 mb-4 border rounded-lg p-4 flex gap-5">
                        <img
                            src={data.photo}
                            alt="Profile"
                            className="w-32 rounded-lg"
                        />

                        <EditableField
                            isEditing={isEditing}
                            value={data.current_position}
                            label="Position actuel"
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <EditableField
                            isEditing={isEditing}
                            value={data.phone}
                            label="Téléphone"
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <EditableField
                            isEditing={isEditing}
                            label="TJM"
                            value={data.freelance.tjm.toString() + " €"}
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <EditableField
                            isEditing={isEditing}
                            label="Salaire variable"
                            value={
                                data.salary_expectations.variable.toString() +
                                " €"
                            }
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <EditableField
                            isEditing={isEditing}
                            label="Salaire fixe"
                            value={
                                data.salary_expectations.fixed.toString() + " €"
                            }
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <EditableField
                            isEditing={isEditing}
                            label="Email"
                            value={data.email?.[0]}
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <CustomSelect
                            label="Année d'expérience"
                            isEditing={isEditing}
                            options={experiences_years}
                            value={mapExperiences(data.experience_years)}
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <CustomSelect
                            isEditing={isEditing}
                            label="Structure de préférence"
                            options={desired_structure}
                            value={data.desired_structure[0]} // TODO: wrong data from dropdown
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <CustomSelect
                            label="Mission de préférence"
                            isEditing={isEditing}
                            options={desired_missions}
                            value={data.desired_missions[0]} // TODO: wrong data from dropdown
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <CustomSelect
                            label="Domaine"
                            isEditing={isEditing}
                            options={domainValues}
                            value={data.field}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
