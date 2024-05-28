import { useNavigate } from "react-router"
import { Header } from "../../../../components/Header"
import { useState } from "react"
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

export const JobDetail = () => {
    const [isEditing, setIsEditing] = useState(false)
    const navigate = useNavigate()
    const { data, isLoading } = useGetJobDetail()

    return (
        <>
            {isLoading && <p>Loading...</p>}

            {!isLoading && (
                <>
                    <Header
                        title="Job Detail"
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        handleBack={() => navigate("/jobs")}
                    />

                    <div className="p-4">
                        <div className="mt-10 mb-4 rounded-lg p-4 flex gap-5">
                            <img
                                src={data?.logo}
                                alt="Job"
                                className="w-32 rounded-lg"
                            />
                        </div>

                        <EditableField
                            isEditing={isEditing}
                            value={data?.title || ""}
                            label="Title"
                        />

                        <EditableField
                            isEditing={isEditing}
                            value={data?.company || ""}
                            label="Company"
                        />

                        <EditableField
                            isEditing={isEditing}
                            value={data?.introduction || ""}
                            label="introduction"
                        />

                        <CustomSelect
                            isEditing={isEditing}
                            label="Structure de préférence"
                            options={desired_structure}
                            value={data?.offered_structure || ""}
                        />

                        <CustomSelect
                            label="Mission de préférence"
                            isEditing={isEditing}
                            options={desired_missions}
                            value={data?.offered_missions || ""} // TODO: wrong data from dropdown
                        />

                        <CustomSelect
                            label="Année d'expérience"
                            isEditing={isEditing}
                            options={experiences_years}
                            value={mapExperiences(
                                data?.experience_years?.[0] || ""
                            )}
                        />

                        <CustomSelect
                            label="Domaine"
                            isEditing={isEditing}
                            options={domainValues}
                            value={data?.fields?.[0] || ""}
                        />
                    </div>
                </>
            )}
        </>
    )
}
