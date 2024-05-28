import { useQuery } from "@tanstack/react-query"
import { LIST_JOBS } from "../constants/queryKey"
import { JobAPI } from "../services/job"

export const useGetJobs = () => {
    return useQuery({
        queryKey: [LIST_JOBS],
        queryFn: () => JobAPI.listJobs()
    })
}