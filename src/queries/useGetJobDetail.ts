import { useQuery } from "@tanstack/react-query"
import { GET_JOB_BY_ID } from "../constants/queryKey"
import { JobAPI } from "../services/job"

export const useGetJobDetail = () => {
    return useQuery({
        queryKey: [GET_JOB_BY_ID],
        queryFn: () => JobAPI.getJob()
    })
}