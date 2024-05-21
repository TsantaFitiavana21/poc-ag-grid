import { useNavigate, useParams } from "react-router"
import { EditIcon } from "../../../../../icons/EditIcon"
import { BackIcon } from "../../../../../icons/BackIcon"
import { useGetCandidateById } from "../../../../../queries/useGetCandidateById"
import {
    desired_missions,
    desired_structure,
    domainValues,
    experiences_years,
} from "../../../../../constants/datas"
import { mapExperiences } from "../../../../../utils"
import { CustomSelect } from "../components/CustomSelect"
import { EditableField } from "../components/EditableField"
import { useState } from "react"

export const Candidate = () => {
    const [isEditing, setIsEditing] = useState(false)

    const urlParams = useParams()
    const navigate = useNavigate()
    const { data, isLoading } = useGetCandidateById(urlParams.id as string)

    return (
        <div className="mx-4 h-full">
            {isLoading && <p>Loading...</p>}

            {!isLoading && data && (
                <div className=" p-4">
                    <div className="flex justify-around items-center mb-4">
                        <BackIcon onClick={() => navigate("/")} className="cursor-pointer" />
                        <img src={data.photo} alt="Profile" className="w-32" />
                        <h1 className="text-2xl font-bold">{data.first_name} {data.last_name}</h1>
                        <EditIcon onClick={() => setIsEditing(!isEditing)} className="cursor-pointer" />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <EditableField
                            isEditing={isEditing}
                            value={data.current_position}
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <EditableField
                            isEditing={isEditing}
                            value={data.phone}
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <EditableField
                            isEditing={isEditing}
                            value={data.freelance.tjm.toString() + " €"}
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        Salaire variable
                        <EditableField
                            isEditing={isEditing}
                            value={data.salary_expectations.variable.toString() + " €"}
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        Salaire fixe
                        <EditableField
                            isEditing={isEditing}
                            value={data.salary_expectations.fixed.toString() + " €"}
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
                        <div className="font-bold">Année d'expérience</div>
                        <CustomSelect
                            options={experiences_years}
                            value={mapExperiences(data.experience_years)}
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <div className="font-bold">Structure de préférence</div>
                        <CustomSelect
                            options={desired_structure}
                            value={data.desired_structure[0]} // TODO: wrong data from dropdown
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <div className="font-bold">Mission de préférence</div>
                        <CustomSelect
                            options={desired_missions}
                            value={data.desired_missions[0]} // TODO: wrong data from dropdown
                        />
                    </div>

                    <div className="mb-4 border rounded-lg p-4">
                        <div className="font-bold">Domaine</div>
                        <CustomSelect
                            options={domainValues}
                            value={data.field}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
