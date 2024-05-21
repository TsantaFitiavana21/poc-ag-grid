import { Candidate, CandidateAPIResponse } from "../types/Candidates"

export const useMapRowData = (data: CandidateAPIResponse[]): Candidate[] => {
    return data.map((candidate: CandidateAPIResponse) => {
        return {
            id: candidate.id,
            photo: candidate.photo,
            first_name: candidate.first_name,
            last_name: candidate.last_name,
            email: candidate.email.map((e) => e).join(", "),
            current_position: candidate.current_position,
            availability_months: candidate.availability_months,
            benefits: candidate.benefits,
            desired_missions: candidate.desired_missions.map((m) => m).join(", "),
            desired_structure: candidate.desired_structure.map((s) => s).join(", "),
            freelance: candidate.freelance.tjm,
            introduction: candidate.introduction,
            salary_expectations: candidate.salary_expectations.fixed,
            phone: candidate.phone,
        }
    })
}
