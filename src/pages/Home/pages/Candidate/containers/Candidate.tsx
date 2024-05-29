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
import { BackIcon } from "../../../../../icons/BackIcon"
import { EditIcon } from "../../../../../icons/EditIcon"

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
                    <div className="bg-white">
                        <div className="bg-gray-200 h-32"></div>

                        <div className="flex items-center p-6 justify-between sticky top-0">
                            <div className="flex">
                                <div className="relative">
                                    <img
                                        src={data.photo}
                                        alt="Profile Picture"
                                        className="rounded-full h-40 w-40 object-cover object-right-top border-4 border-white -mt-20 mx-4"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h1 className="text-3xl font-bold">
                                        {data.first_name.toUpperCase() +
                                            " " +
                                            data.last_name.toUpperCase()}
                                    </h1>
                                    <p className="text-gray-600">
                                        {data.current_position}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-5">
                                <BackIcon
                                    onClick={() => navigate(-1)}
                                    className="cursor-pointer"
                                />
                                <EditIcon
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    <h1 className="mx-12 text-2xl text-slate-500 border-b">
                        Personal Informations
                    </h1>
                    <div className="mx-12 mt-4 flex space-x-4 justify-between">
                        <EditableField
                            isEditing={isEditing}
                            value={data.first_name}
                            label="First Name"
                        />

                        <EditableField
                            isEditing={isEditing}
                            value={data.last_name}
                            label="Last Name"
                        />

                        <EditableField
                            isEditing={isEditing}
                            value={data.phone}
                            label="Phone"
                        />

                        <EditableField
                            isEditing={isEditing}
                            value={data.current_position}
                            label="Actual Position"
                        />
                    </div>

                    <div className="mx-12 mt-4 flex space-x-4 justify-between">
                        <EditableField
                            isEditing={isEditing}
                            value={data.email?.[0]}
                            label="Email"
                        />
                    </div>

                    <h1 className="mx-12 text-2xl mt-6 text-slate-500 border-b">
                        Prices
                    </h1>
                    <div className="mx-12 mt-4 flex space-x-4 justify-between">
                        <EditableField
                            isEditing={isEditing}
                            label="TJM"
                            value={data.freelance.tjm.toString() + " €"}
                        />

                        <EditableField
                            isEditing={isEditing}
                            label="Salaire variable"
                            value={
                                data.salary_expectations.variable.toString() +
                                " €"
                            }
                        />

                        <EditableField
                            isEditing={isEditing}
                            label="Salaire fixe"
                            value={
                                data.salary_expectations.fixed.toString() + " €"
                            }
                        />

                        <div className="w-72 md:w-54"></div>
                    </div>

                    <h1 className="mx-12 text-2xl mt-6 text-slate-500 border-b">
                        Carreer
                    </h1>
                    <div className="mx-12 mt-4 flex space-x-4 justify-between mb-8">
                        <CustomSelect
                            label="Année d'expérience"
                            isEditing={isEditing}
                            options={experiences_years}
                            value={mapExperiences(data.experience_years)}
                        />

                        <CustomSelect
                            isEditing={isEditing}
                            label="Structure de préférence"
                            options={desired_structure}
                            value={data.desired_structure[0]} // TODO: wrong data from dropdown
                        />

                        <CustomSelect
                            label="Mission de préférence"
                            isEditing={isEditing}
                            options={desired_missions}
                            value={data.desired_missions[0]} // TODO: wrong data from dropdown
                        />

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
