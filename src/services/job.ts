import { JobType } from "../pages/Jobs/types/Job"

export class JobAPI {
    static async listJobs(): Promise<JobType[]> {
        return fetch(import.meta.env.VITE_JOB_API_URL)
            .then((res) => res.json())
            .then((data) => data)
    }

    static async getJob(): Promise<JobType> {
        return fetch(import.meta.env.VITE_JOB_DETAILS_API_URL)
            .then((res) => res.json())
            .then((data) => data)
    }
}
