export type JobType = {
    id: string;
    company: string;
    logo: string;
    title: string;
    introduction: string;
    offered_structure: string;
    offered_missions: string;
    offered_salary: {
        fixed: number;
    };
    experience_years: string[];
    availability_months: number[];
    fields: string[];
}

export type Job = {
    id: string;
    logo: string;
    company: string;
    title: string;
    introduction: string;
    offered_structure: string;
    offered_missions: string;
    offered_salary: string;
    experience_years: string;
    availability_months: string;
    fields: string;
}