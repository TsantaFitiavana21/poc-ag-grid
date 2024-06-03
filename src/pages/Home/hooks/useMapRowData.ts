import { Candidate, CandidateAPIResponse } from "../types/Candidates"

export const useMapRowData = () => {
    return (data: CandidateAPIResponse): Candidate => {
        return {
            id: data.id,
            photo: data.photo,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email.map((e) => e).join(", "),
            current_position: data.current_position,
            availability_months: data.availability_months,
            benefits: data.benefits,
            desired_missions: data.desired_missions.map((m) => m).join(", "),
            desired_structure: data.desired_structure.map((s) => s).join(", "),
            freelance: data.freelance.tjm,
            introduction: data.introduction,
            salary_expectations: data.salary_expectations.fixed.toString(),
            variable_salary: data.salary_expectations.variable.toString(),
            phone: data.phone,
            field: data.field,
            experience_years: data.experience_years,
        }
    }
}
