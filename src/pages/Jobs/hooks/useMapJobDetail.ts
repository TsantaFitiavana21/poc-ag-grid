import { Job, JobType } from "../types/Job"

export const useMapJobDetail = () => {
    return (data: JobType) : Job => {
        return {
            id: data.id,
            company: data.company,
            logo: data.logo,
            title: data.title,
            introduction: data.introduction,
            offered_structure: data.offered_structure,
            offered_missions: data.offered_missions,
            offered_salary: data.offered_salary.fixed.toString(),
            experience_years: data.experience_years?.[0].toString(),
            availability_months: data.availability_months[0].toString(),
            fields: data.fields[0]
        }
    }
}