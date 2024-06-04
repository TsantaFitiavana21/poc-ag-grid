import { useNavigate } from "react-router"
import { ChangeEvent, useEffect, useState } from "react"
import { useGetJobDetail } from "../../../../queries/useGetJobDetail"
import { EditableField } from "../../../../components/EditableField"
import { CustomSelect } from "../../../../components/CustomSelect"
import {
    desired_missions,
    desired_structure,
    domainValues,
    experiences_years,
} from "../../../../constants/datas"
import { mapExperiences } from "../../../../utils"
import { Job } from "../../types/Job"
import { useMapJobDetail } from "../../hooks/useMapJobDetail"
import { BackIcon } from "../../../../icons/BackIcon"
import { EditIcon } from "../../../../icons/EditIcon"
import { CheckIcon } from "../../../../icons/CheckIcon"

export const JobDetail = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [job, setJob] = useState({} as Job)

    const navigate = useNavigate()
    const mapJob = useMapJobDetail()
    const { data } = useGetJobDetail()

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setJob({ ...job, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (data) {
            setJob(mapJob(data))
        }
    }, [data])

    return (
        <div className="h-screen overflow-y-scroll">
            {/* {isLoading && <p>Loading...</p>} */}

            {/* {!isLoading && ( */}
            <div>
                <div className="bg-white">
                    <div className=" bg-gray-100 shadow-md p-4 w-full sticky top-0 z-10">
                        <div className="flex justify-between space-x-5 mx-6">
                            <BackIcon
                                onClick={() => navigate(-1)}
                                className="cursor-pointer"
                            />
                            {!isEditing ? (
                                <EditIcon
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="cursor-pointer"
                                />
                            ) : (
                                <CheckIcon
                                    className="cursor-pointer"
                                    onClick={() => setIsEditing(!isEditing)}
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex items-center p-6 justify-between">
                        <div className="flex">
                            <div className="relative">
                                <img
                                    src={job?.logo}
                                    alt="Profile Picture"
                                    className="rounded-full h-40 w-40 object-cover object-right-top border-4 border-white mx-4"
                                />
                            </div>
                            <div className="ml-4 pt-12">
                                <h1 className="text-3xl font-bold">
                                    {job?.title?.toUpperCase()}
                                </h1>
                                <p className="text-gray-600">
                                    {job?.introduction}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="mx-12 text-2xl text-slate-500 border-b">
                    Job detail
                </h1>
                <div className="mx-12 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <EditableField
                        isEditing={isEditing}
                        value={job?.title || ""}
                        label="Title"
                        name="title"
                        onChange={handleChange}
                    />

                    <EditableField
                        isEditing={isEditing}
                        value={job?.company || ""}
                        label="Company"
                        name="company"
                        onChange={handleChange}
                    />

                    <EditableField
                        isEditing={isEditing}
                        value={job?.introduction || ""}
                        label="Introduction"
                        name="introduction"
                        onChange={handleChange}
                    />
                </div>

                <h1 className="mx-12 text-2xl text-slate-500 border-b">Recommandation</h1>
                <div className="mx-12 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <EditableField
                        isEditing={isEditing}
                        value={job?.availability_months || ""}
                        label="Availability months"
                        name="availability_months"
                        onChange={handleChange}
                    />

                    <CustomSelect
                        isEditing={isEditing}
                        label="Structure de préférence"
                        options={desired_structure}
                        value={job?.offered_structure || ""}
                        name="offered_structure"
                        onChange={handleChange}
                    />

                    <CustomSelect
                        label="Mission de préférence"
                        isEditing={isEditing}
                        options={desired_missions}
                        value={job?.offered_missions || ""}
                        name="offered_missions"
                        onChange={handleChange}
                    />

                    <CustomSelect
                        label="Année d'expérience"
                        isEditing={isEditing}
                        options={experiences_years}
                        value={mapExperiences(job?.experience_years || "")}
                        name="experience_years"
                        onChange={handleChange}
                    />

                    <CustomSelect
                        label="Domaine"
                        isEditing={isEditing}
                        options={domainValues}
                        value={job?.fields || ""}
                        name="fields"
                        onChange={handleChange}
                    />
                </div>
            </div>
            {/* )} */}
        </div>
    )
}
