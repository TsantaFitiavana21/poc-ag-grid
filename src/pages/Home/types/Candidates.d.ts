export type Candidate = {
    id: string
    photo: string
    first_name: string
    last_name: string
    email: string
    current_position: string
    availability_months: number
    benefits: string
    experience_years: string
    desired_missions: string
    desired_structure: string
    freelance: number
    introduction: string
    salary_expectations: string
    variable_salary: string
    field: string
    phone: string
}

export type CandidateAPIResponse = {
    id: string
    photo: string
    first_name: string
    last_name: string
    email: string[]
    current_position: string
    availability_months: number
    benefits: string
    experience_years: string
    desired_missions: string[]
    desired_structure: string[]
    freelance: {
        tjm: number
    }
    introduction: string
    salary_expectations: {
        fixed: number
        variable: number
    }
    phone: string
    field: string
}
